---
image: https://images.unsplash.com/photo-1556473062-062e556b0920?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80
title: Stress-free Continuous Delivery with auto
author:
  name: Andrew Lisowski
  url: https://twitter.com/HipsterSmoothie
  email: lisowski54@gmail.com
---

`auto` makes releasing your code a breeze. Instead of manually calculating a version and doing your whole release process manually, `auto` takes care of it for you.

The main command most users use to interact with `auto` is the shipit command. shipit does all the heaving lifting when releasing your code.

When run on master it will:

1. Determine if the last merged PR needs to be released
2. Update a CHANGELOG.md with all you new changes
3. Publish to NPM
4. Make a release on GitHub and mark it as latest

When run from a PR or locally it will create a canary version.

---

## How does it work?

`auto` does all this magic through GitHub labels. This makes managing outside contribution super easy. Contributors code, you determine the appropriate label, and `auto` takes care of the rest.

There are a few types of labels:

1. Release Labels
2. Changelog Labels
3. Arbitrary labels

---

### Release Labels

These labels will help you release semantically versioned packages. If no label is present `auto` assumes the PR is a patch.

- major: The PR changes the public API in some way. Create a major release
- minor: The PR adds a feature to the public API. Create a minor release
- patch: The PR fixes a bug. Create a patch release
- skip-release: The PR should not be released. This labels can be used in conjunction with the previous labels for when the PR is actually released
- internal: Changes only effect how the app is structured or something that doesn't effect the user. This counts as a patch release

### Changelog Labels

These labels can be used to make your changelogs more expressive. Add them to PRs with release labels to override what changelog section the changes display in. Or use them on their own to just create a patch release.

You can configure more changelog sections, read more here.

### Arbitrary labels

`auto` doesn't use any extra labels, but you can use whatever labels to power more `auto`mated workflows with `auto` label. This command will return the labels for a PR. Using that information you can choose to run extra CI jobs.

For example,. the following will only run the test:visual script when the PR has has the Visual label.

```sh
export PATH=$(npm bin):$PATH

if [ `auto label --pr $PR_NUMBER | grep -c '^Visual'` -ne 0 ];
then
    npm run test:visual
fi
```

---

## Wrapping Up

Now that you know all of the above, you have all you need to release every build as the correct version. No longer worry what tag to publish to or what version. You should never really have to run `auto` yourself, the CI will do that on each build!

All you have to know is what the labels are and when to use them.

If you have any questions about how to use `auto` feel free to ask! I hope you guys enjoy the automated release process! :gift:
