# Ridiculous at First Glance, Real by the Second

[![make.fun](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![Rank](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/cepcil242/ridiculous-pitch/rank.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![Reward](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/cepcil242/ridiculous-pitch/reward.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)

A [make.fun](https://make.fun) entry for the competition
[Ridiculous at First Glance, Real by the Second](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a):
a Node program that writes one sentence pitching a bizarre startup idea
that sounds ridiculous at first glance but is clearly a real business to
`/output/entry.txt`.

## The pitch

> For $19, a professional mourner reads a eulogy for your dead houseplant over Zoom, because grieving plant parents happily pay to feel less silly about crying over a fern.

## How to run

Requires Node 22.18 or later (TypeScript runs natively, no install needed):

```sh
node main.ts
```

This writes the pitch to `/output/entry.txt`. To write somewhere else:

```sh
ENTRY_OUTPUT_PATH=/tmp/entry.txt node main.ts
```

The entry is validated before writing: it must be a single line of 1–200
characters and not whitespace-only.
