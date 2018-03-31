#!/bin/bash
@echo off
printf "\033c"

SET /P filename="Insert name of file: "

echo Wait while your file is being created...
cp -r ./basic/normal.nunjucks ./%filename%.nunjucks