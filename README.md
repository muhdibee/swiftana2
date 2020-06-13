Swift and easy access to mental health specialist

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f6febb0505f7497f8fd5bbf3e9126be0)](https://app.codacy.com/gh/BuildForSDG/swiftana2?utm_source=github.com&utm_medium=referral&utm_content=BuildForSDG/swiftana2&utm_campaign=Badge_Grade_Settings)


## About

Swiftana is a mental health assistant bot that assist users concerning their mental health problems. It give recommendations on possible cure or remedies base on the users health sysmtoms. In a situation whereby the bot can not handle the user request or the user need to talk to a real human consultant, the bot connect them to real human specialist nearest to their location. The project is in Sustainable Development Goal(SDG) goal 3, problem statmeent 1 of the Andela build for SDG project.

## Why

From time to time, many people surver from one mental disorder or the other such as depression, anxiety, schizophrenia, eating disorders, Feeling sad or down, addictive behaviors, Extreme mood changes of highs and lows, Sex drive changes, Excessive anger, hostility or violence, Inability to cope with daily problems or stress, Suicidal thinking among others.These mental illness can make you miserable and can cause problems in your daily life. In most cases, symptoms of mental helath disorder can be managed with one or combination of medications and talk to therapy (psychotherapy).

For instance, It was revealved that one in four Nigerians suffers from mental illness (https://www.aljazeera.com/ajimpact/nigeria-mental-health-problem-191002210913630.html). In a country where it is estimated that the ratio of Psychiatrists to patients is 0.09 ratio 100,000 persons. This in turn has resulted to an overwhelming workload for the psychiatrists and patients need to que for hours before getting consultation. Swiftana try to reduce the workload on these limited pssychiatrists by handling some of their request  where possible.

## Usage
How Swiftana work
1. Users start by visiting the platform https://lit-dusk-59445.herokuapp.com/
2. Swiftana welcome users, greet them and ask for their systoms (As a user, start by typing "hello", "hi" etc)
3. Swiftana gives recommended remedies for users symtoms treatment
5. If user need to talk to real human specialist, Swiftana as for users location and show them contact details of specialist in their location. (As a user type "from Nigeria"

## Setup
You should have **Python 3.6 installed on your window machine with the following version of packages.
Flask==1.1.2
nltk==3.5
numpy==1.16.4
Pillow==7.1.2
scikit-learn==0.23.1
tensorflow==1.5.0
tflearn==0.3.2
windows-curses==2.1.0

1. Clone the repo you've created from the template herein and change into the directory e.g

    ``
    git clone <this repository>
    ``

2. Change into src directory

    ``
    cd src
    ``

3. Install poetry, a dependecy manager for python.

    On windows, you will need powershell to install it:

    ``
    (Invoke-WebRequest -Uri https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py -UseBasicParsing).Content | python
    ``

    After that you will need to restart the shell to make it operational.

    &nbsp;

    On linux and other posix systems (mac included):

    ``
    curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python
    ``

    &nbsp;

    To check that it is correctly installed, you can check the version:
    ``
    poetry --version
    ``

    May be the latest stable version is not installed with the installation script, to update poetry, you can run:

    ``
    poetry self update
    ``

4. With poetry installed, you should install project dependecies by running:

    ``
    poetry install
    ``

    This will install pytest for running tests and flake8, linter for your project.

#### To Note
`src/app.py` is the entry to the project and source code should go into the `src` folder.

## Authors

List the team behind this project. Their names linked to their Github, LinkedIn, or Twitter accounts should siffice. Ok to signify the role they play in the project, including the TTL and mentor

## Contributing
If this project sounds interesting to you and you'd like to contribute, thank you!
First, you can send a mail to buildforsdg@andela.com to indicate your interest, why you'd like to support and what forms of support you can bring to the table, but here are areas we think we'd need the most help in this project :
1.  area one (e.g this app is about human trafficking and you need feedback on your roadmap and feature list from the private sector / NGOs)
2.  area two (e.g you want people to opt-in and try using your staging app at staging.project-name.com and report any bugs via a form)
3.  area three (e.g here is the zoom link to our end-of sprint webinar, join and provide feedback as a stakeholder if you can)

## Acknowledgements

Did you use someone else’s code?
Do you want to thank someone explicitly?
Did someone’s blog post spark off a wonderful idea or give you a solution to nagging problem?

It's powerful to always give credit.

## LICENSE
MIT
