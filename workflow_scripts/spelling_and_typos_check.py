import subprocess
import os

def run_codespell():
    root_dir = os.getcwd()  # Get the current working directory

    # Run codespell with the root directory as the target
    subprocess.run(['codespell', root_dir, '--write-changes'])

if __name__ == "__main__":
    run_codespell()