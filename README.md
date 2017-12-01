# require-all-node
require all file in directory

# API
Export a object with two functions.
## requireAll(path,[extension,cb])

The callback is exec with error and a array with all file in path given. If any callback is not given a promise is returned. The param extension is the extension to validate file name in require statement, could be a string or a regex. Default value is ".js"

## requireAllSync(path, extension) -> array

Version sync of requireAll.
