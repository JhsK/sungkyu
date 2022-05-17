export const queryKeys = {
  posts: (tagId: string, searchValue: string) => ['posts', tagId, searchValue] as const,
};
