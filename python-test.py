from ast import Num
import re
from pathlib import Path
import json
from tokenize import Number
regex = re.compile("snipppet_metdata")
root_dir = ("./samples/generated")

def walk_through_files(dir):
    metadata_files = []
    for path_object in Path(dir).glob('**/*'):
        # print(path_object)
        if path_object.is_file():
            if re.search(r"snippet_metadata", str(path_object)):
                metadata_files.append(str(Path.resolve(path_object)))
        if path_object.is_dir():
                walk_through_files(path_object)

    return metadata_files

# walk_through_files(root_dir)

def writeFile(version: str):
    snippet_metadata_files = walk_through_files(root_dir)
    for file in snippet_metadata_files:
        with open(file, 'r+') as f:
            data = json.load(f)
            data['clientLibrary']['version'] = version
            f.seek(0)
            json.dump(data, f, indent=4)
            f.truncate()


writeFile('3.1.0')