// Instead of needing to enurmate every root id, this overrides the "includes" function from storybook
// and force collapses all of roots. https://github.com/storybookjs/storybook/blob/next/lib/api/src/lib/stories.ts#L244
class CollapseAll extends Array {
  includes() {
    return true;
  }
}
export const collapseAll = new CollapseAll(1);
