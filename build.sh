#!/usr/bin/env bash

npm i
rm -rf content
git clone git@github.com:nicolecomputer/nicole-notes.git content
npx quartz build
