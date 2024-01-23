import subprocess
import os
import inquirer

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

    # Prompt the user for corrections
    prompt_user_for_corrections(suggestions)

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
            suggestions.append({'file_path': file_path, 'line_number': line_number, 'typo_info': typo_info})

    return suggestions

def prompt_user_for_corrections(suggestions):
    for suggestion in suggestions:
        file_path = suggestion['file_path']
        line_number = suggestion['line_number']
        typo_info = suggestion['typo_info']

        # Extract the original text and suggestions
        original_text = typo_info.split(' ==> ')[0]
        suggested_options = typo_info.split(' ==> ')[1].split(', ')

        # Create a list of choices for the user
        choices = [{'name': option} for option in suggested_options]

        # Prompt the user to choose a correction
        questions = [
            inquirer.List('correction',
                          message=f'Typo in {file_path}:{line_number}: {original_text}. Choose a correction:',
                          choices=choices)
        ]

        answers = inquirer.prompt(questions)

        # Apply the selected correction to the file
        apply_correction_to_file(file_path, line_number, original_text, answers['correction'])

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
