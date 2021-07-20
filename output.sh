#!/bin/bash


namespaces=(constants formulas)


for ns in ${namespaces[@]}
do
  # protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=. ./formulas/formulas.proto
  protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=. "./$ns/$ns.proto"
done

# protoc --proto_path=./formulas --go_out=./formulas ./formulas/formulas.proto

