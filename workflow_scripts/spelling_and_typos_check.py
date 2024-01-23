import subprocess
import os

def run_codespell():
    root_dir = os.getcwd()  # Get the current working directory

    # Run codespell with the root directory as the target
    result = subprocess.run(['codespell', root_dir], capture_output=True, text=True)

    if result.stdout:
        print(result.stdout)

    if result.stderr:
        print(result.stderr)

    # Process the output for suggestions
    suggestions = process_codespell_output(result.stderr)

    # Automatically choose the first suggestion
    for suggestion in suggestions:
        apply_correction_to_file(suggestion['file_path'], suggestion['line_number'],
                                 suggestion['original_text'], suggestion['suggested_options'][0])

def process_codespell_output(codespell_output):
    # Process codespell output to extract suggestions for corrections
    suggestions = []
    lines = codespell_output.strip().split('\n')

    for line in lines:
        parts = line.split(':')
        if len(parts) >= 3:
            file_path = parts[0]
            line_number = int(parts[1])
            typo_info = parts[2]

            # Extract the original text and suggested options
            original_text = typo_info.split(' ==> ')[0]
            suggested_options = typo_info.split(' ==> ')[1].split(', ')

            suggestions.append({
                'file_path': file_path,
                'line_number': line_number,
                'original_text': original_text,
                'suggested_options': suggested_options
            })

    return suggestions

def apply_correction_to_file(file_path, line_number, original_text, corrected_text):
    # Open the file, read its content, replace the original text with the corrected text
    with open(file_path, 'r') as file:
        lines = file.readlines()

    lines[line_number - 1] = lines[line_number - 1].replace(original_text, corrected_text)

    # Write the updated content back to the file
    with open(file_path, 'w') as file:
        file.writelines(lines)

if __name__ == "__main__":
    run_codespell()
