# Makefile for building React code
.PHONY: all
JSXS=$(wildcard *.jsx)
JSS=$(JSXS:.jsx=.js)

%.js: %.jsx
	@jsx $< > $@

all: $(JSS)
