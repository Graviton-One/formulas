#!/bin/bash


protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./formulas ./formulas/formulas.proto
# protoc --proto_path=./formulas --go_out=./formulas ./formulas/formulas.proto

