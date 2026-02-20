# Git Version Tag

A small project for **Git versioning and tagging**: learning and applying semantic versioning (e.g. `v1.0.0`), creating and managing Git tags, and tying releases to specific commits.

## Description

This repo is used to practice and demonstrate **Git versioning and tagging** workflows: creating tags (lightweight and annotated), pushing tags to a remote, and using tags to mark release points in the history. The codebase is minimal so the focus stays on version and tag management rather than application logic.

## Quick reference

- **Tag a release:** `git tag -a v1.0.0 -m "Release 1.0.0"`
- **List tags:** `git tag -l`
- **Push a tag:** `git push origin v1.0.0`
- **Push all tags:** `git push origin --tags`

## Running the project

```bash
node src/git.js
```
