import os
import shutil

# Define the source directory where the new schema.json files are located
source_dir = "strapi-medusa-migrate/template/src/api"

# Define the target directory where the existing schema.json files are located which should be replaced
target_dir = "strapi-medusa/src/api"

# Iterate over all the subdirectories in the target directory
for subdir, dirs, files in os.walk(target_dir):
    for file in files:
        # Check if the current file is a schema.json file
        if file == "schema.json":
            # Define the path to the current schema.json file
            current_file_path = os.path.join(subdir, file)

            # Extract the name of the content-type
            content_type_name = os.path.basename(os.path.dirname(os.path.dirname(subdir)))

            # Define the path to the new schema.json file
            new_file_path = os.path.join(source_dir, content_type_name, "content-types", content_type_name, file)
            print("new path is :  : : ", new_file_path)

            # Check if the new schema.json file exists
            print(os.path.exists(new_file_path))
            if os.path.exists(new_file_path):
                print("if success")
                # Replace the current schema.json file with the new one
                shutil.copy(new_file_path, current_file_path)
                print(f"Replaced {current_file_path} with {new_file_path}")