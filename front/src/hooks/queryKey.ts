export const queryKeys = {
  posts: ['posts', null, ''] as const,
  tags: ['tagList'] as const,
  // posts: (tagId: string, searchValue: string) => ['posts', tagId, searchValue] as const,
};
