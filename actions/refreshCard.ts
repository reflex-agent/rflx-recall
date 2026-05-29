/**
 * Card refresh: list the most recent "loose-end" KB entries the morning
 * workflow has written, as an action-list the dashboard renders. Runs in a
 * worker with the utility's host API (permissions.workers + kb.read).
 */
interface KbListItem {
  relPath: string;
  title?: string;
  modifiedAt: string;
}

interface Host {
  kb: { list: (args: { kind: string }) => Promise<KbListItem[]> };
}

export async function run(_args: unknown, host: Host) {
  let entries: KbListItem[] = [];
  try {
    entries = await host.kb.list({ kind: "loose-end" });
  } catch {
    entries = [];
  }
  const items = entries
    .slice()
    .sort((a, b) => (a.modifiedAt < b.modifiedAt ? 1 : -1))
    .slice(0, 10)
    .map((e) => ({ id: e.relPath, title: e.title ?? e.relPath }));

  return {
    kind: "action-list",
    title: "Loose Ends",
    data: {
      groups: [
        {
          label: "Open threads",
          emptyText: "All caught up — nothing left hanging.",
          items,
        },
      ],
    },
  };
}
