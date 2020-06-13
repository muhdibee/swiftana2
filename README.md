Swift and easy access to mental health specialist

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f6febb0505f7497f8fd5bbf3e9126be0)](https://app.codacy.com/gh/BuildForSDG/swiftana2?utm_source=github.com&utm_medium=referral&utm_content=BuildForSDG/swiftana2&utm_campaign=Badge_Grade_Settings)


## About

Mental health is an area that has continued to widely impact the society in which we live. Various people from different parts of the world have had to deal with this issue for various unique or similar reasons. This condition has gone on to impact the lives of the affected people in various ways. There exists a number of scientific-backed solutions that have been proven to help to combat this situation. Most of these solutions involve interaction with health professionals. 
However, mental health problems are usually associated with a lot of stigma which may make it difficult for some people to come out and seek help. For this reason, it is crucial to provide another outlet or outlet through which patients can get useful information to help them to deal with the situation. Mental health disorder is common in our society more than you may ever think. For instance in Nigeria, It is estimated by World Health Organization (WHO) that One in four Nigerians - some 50 million people - are suffering from some sort of mental illness. In a country where mental health disorder patient ratio to health specialist is 0.09 ratio 100,000. This in turn has resulted to an overwhelming workload for the mental health specialist and many patients need to que for hours before getting consultation or not being able to get consultantation at all. Read more about mental health disorder down below this page.

In view of the problem statement above, a viable solution would be to provide a platform through which patients can get useful information that can assist them to deal with mental health problems. The idea is to use machine learning on the various pieces of health data to try to diagnose patients for the various types of mental health problems that they have and propose solutions accordingly.
The approach taken is to use an intelligent agent (chat bot) that patients can interact with and get the information that can assist their unique conditions. 

## Usage

### How it work

Swiftana is a mental health assistant bot created to help provide remedies to this ravaging mental health problems baffling our society. Swiftana work by given recommendations on possible cure or remedies base on the users health issues or sysmtoms. In a situation whereby the bot can not handle the user request or the user need to talk to a real human consultant, the bot connect them to nearby specialist or outpatient clinic in their location. The project is in line with the Sustainable Development Goal(SDG goal 3), problem statmeent 1 of the Andela build for SDG project. 

### Usage
A user goes online and accesses the bot using a given URL after which they can start interacting with the system. The user can type in any relevant information and the bot will give a relevant response accordingly. The bot suggests possible remedies or recommendations that the user can make use of to assist them with their various conditions. After successful interaction, the bot suggests the nearest hospitals that offer mental health services that the patients can visit in order to seek further assistance. 

### Practical usage
1. Visit https://lit-dusk-59445.herokuapp.com/
2. Type "Hello"
3. Reply the bot by typing "I have been thinking suicide for days"
4. Then type "nearest hostipal"
5. Enter "Nigeria" as your location
6. You will get the list of specialist 

## Setup
You should have **Python 3.6 installed on your window machine with the following version of python packages.
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

## LICENSE
MIT

# READ MORE ABOUT MENTAL HEALTH DISORDER
Depression:- a group of conditions associated with elevation or lowering of a person's mood.
Symptoms may be ongoing or come and go. 
Common Types
1. Clinical Depression
Mental Health Disorder characterized by persistently depressed mood or loss of interest in activities, causing significant impairment in daily life
A more severe form of depression characterized by persistent feelings of sadness, hopelessness, and worthlessness that don’t go away on their own.
In order to be diagnosed with clinical depression, 
	you must experience 5 or more of the following symptoms over a 2-week period:
	-feeling depressed most of the day
	-loss of interest in most regular activities
	-significant weight loss or gain
	-sleeping a lot or not being able to sleep
	-slowed thinking or movement
	-fatigue or low energy most days
	-feelings of worthlessness or guilt
	-loss of concentration or indecisiveness
	-recurring thoughts of death or suicide
2. Persistent depressive disorder/dysthmia
Mild, chronic form of depression
A mild but long-term form of depression
Proper diagnosis includes symptoms being evident for at least two years
It’s common for people with PDD to:
•	lose interest in normal daily activities
•	feel hopeless
•	lack productivity
•	have low self-esteem
3. Bipolar Disorder
A disorder associated with episodes of mood swings ranging from 
depressive lows to manic highs


4. Bipolar II disorder
A less severe type of bipolar disorder characterized by depressive and 
hypomanic episodes

5. Postnatal Depression
Depression that occurs after childbirth

Symptoms of Depression
MEN
- mood: such as anger, aggressiveness, irritability, anxiousness, restlessness
- emotional well-being: such as feeling empty, sad, hopeless
- behavior: such as loss of interest, no longer finding pleasure in favorite activities, feeling tired easily, thoughts of suicide, drinking excessively, using drugs, engaging in high-risk activities
- sexual interest: such as reduced sexual desire, lack of sexual performance
- cognitive abilities: such as inability to concentrate, difficulty completing tasks, delayed responses during conversations
- sleep patterns: such as insomnia, restless sleep, excessive sleepiness, not sleeping through the night
- physical well-being: such as fatigue, pains, headache, digestive problems

WOMEN
- mood: such as irritability
- emotional well-being: such as feeling sad or empty, anxious or hopeless
- behavior: such as loss of interest in activities, withdrawing from social engagements, thoughts of suicide
- cognitive abilities: such as thinking or talking more slowly
- sleep patterns: such as difficulty sleeping through the night, waking early, sleeping too much
- physical well-being: such as decreased energy, greater fatigue, changes in appetite, weight changes, aches, pain, headaches, increased cramps

CHILDREN
Children may experience symptoms related to their:- mood: such as irritability, anger, mood swings, crying
- emotional well-being: such as feelings of incompetence (e.g. “I can’t do anything right”) or despair, crying, intense sadness
- behavior: such as getting into trouble at school or refusing to go to school, avoiding friends or siblings, thoughts of death or suicide
- cognitive abilities: such as difficulty concentrating, decline in school performance, changes in grades
- sleep patterns: such as difficulty sleeping or sleeping too much
- physical well-being: such as loss of energy, digestive problems,
 changes in appetite, weight loss or gain


	Common causes of Depression	
- Family history: You’re at a higher risk for developing depression if you have a family history of depression or another mood disorder.
- Early childhood trauma: Some events affect the way your body reacts to fear and stressful situations.
- Brain structure: There’s a greater risk for depression if the frontal lobe of your brain is less active. 
	However, scientists don’t know if this happens before or after the onset of depressive symptoms.
- Medical conditions: Certain conditions may put you at higher risk, such as chronic illness, insomnia, chronic pain, or attention-deficit hyperactivity disorder (ADHD).
- Drug use: A history of drug or alcohol misuse can affect your risk.

DEPRESSION TEST

There isn’t a single test to diagnose depression.
But your healthcare provider can make a diagnosis based on the symptoms and a psychological evaluation.
Some of the questions asked include:
-moods
-appetite
-sleep pattern
-activity level
-thoughts
Health issues such as thyroid problems or a vitamin D deficiency can trigger symptoms of depression.

DANGERS OF DEPRESSION
-weight gain or loss
-physical pain
-substance use problems
-panic attacks
-relationship problems
-social isolation
-thoughts of suicide
-self-harm

Treatment for depression
Living with depression can be difficult, but treatment can help improve your quality of life. Talk to your healthcare provider about possible options.
You may successfully manage symptoms with one form of treatment, or you may find that a combination of treatments works best.
It’s common to combine medical treatments and lifestyle therapies, including the following:
Medications
Your healthcare provider may prescribe:
•	antidepressants
•	antianxiety
•	antipsychotic medications
Each type of medication that’s used to treat depression has benefits and potential risks.

Psychotherapy
Speaking with a therapist can help you learn skills to cope with negative feelings. You may also benefit from family or group therapy sessions.

Light therapy
Exposure to doses of white light can help regulate your mood and improve symptoms of depression. Light therapy is commonly used in seasonal affective disorder, which is now called major depressive disorder with seasonal pattern.
Alternative therapies
Ask your healthcare provider about acupuncture or meditation. Some herbal supplements are also used to treat depression, like St. John’s wort, SAMe, and fish oil.
Talk with your healthcare provider before taking a supplement or combining a supplement with prescription medication because some supplements can react with certain medications. Some supplements may also worsen depression or reduce the effectiveness of medication.
Exercise
Aim for 30 minutes of physical activity 3 to 5 days a week. Exercise can increase your body’s production of endorphins, which are hormones that improve your mood.

Avoid alcohol and drugs
Drinking or misusing drugs may make you feel better for a little bit. But in the long run, these substances can make depression and anxiety symptoms worse.

Learn how to say no
Feeling overwhelmed can worsen anxiety and depression symptoms. Setting boundaries in your professional and personal life can help you feel better.

Take care of yourself
You can also improve symptoms of depression by taking care of yourself. This includes getting plenty of sleep, eating a healthy diet, avoiding negative people, and participating in enjoyable activities.

Sometimes depression doesn’t respond to medication. Your healthcare provider may recommend other treatment options if your symptoms don’t improve.

These include electroconvulsive therapy (ECT), or repetitive transcranial magnetic stimulation (rTMS) to treat depression and improve your mood.


Natural treatment for depression
Traditional depression treatment uses a combination of prescription medication and counseling. But there are also alternative or complementary treatments you can try.
It’s important to remember that many of these natural treatments have few studies showing their effects on depression, good or bad.
Likewise, the U.S. Food and Drug Administration (FDA) doesn’t approve many of the dietary supplements on the market in the United States, so you want to make sure you’re buying products from a trustworthy brand.
Talk to your healthcare provider before adding supplements to your treatment plan.

Supplements
Several types of supplements are thought to have some positive effect on depression symptoms.
St. John’s wort
Studies are mixed, but this natural treatment is used in Europe as an antidepressant medication. In the United States, it hasn’t received the same approval.
S-adenosyl-L-methionine (SAMe)
This compound has shown in limited studies to possibly ease symptoms of depression. The effects were best seen in people taking selective serotonin reuptake inhibitors (SSRIs), a type of traditional antidepressant.
5-hydroxytryptophan (5-HTP)
5-HTP may raise serotonin levels in the brain, which could ease symptoms. Your body makes this chemical when you consume tryptophan, a protein building block.
Omega-3 fatty acids
These essential fats are important to neurological development and brain health. Adding omega-3 supplements to your diet may help reduce depression symptoms.
Essential oils
Essential oils are a popular natural remedy for many conditions, but research into their effects on depression is limited.
People with depression may find symptom relief with the following essential oils:
Wild ginger: Inhaling this strong scent may activate serotonin receptors in your brain. This may slow the release of stress-inducing hormones.
Bergamot: This citrusy essential oil has been shown to reduce anxiety in patients awaiting surgery. The same benefit may help individuals who experience anxiety as a result of depression, but there’s no research to support that claim.
Other oils, such as chamomile or rose oil, may have a calming effect when they’re inhaled. Those oils may be beneficial during short-term use.
Vitamins
Vitamins are important to many bodily functions. Research suggests two vitamins are especially useful for easing symptoms of depression:
Vitamin B: B-12 and B-6 are vital to brain health. When your vitamin B levels are low, your risk for developing depression may be higher.
Vitamin D: Sometimes called the sunshine vitamin because exposure to the sun supplies it to your body, Vitamin D is important for brain, heart, and bone health. People who are depressed are more likely to have low levels of this vitamin.
Many herbs, supplements, and vitamins claim to help ease symptoms of depression, but most haven’t shown themselves to be effective in clinical research.

Learn about herbs, vitamins, and supplements that have shown some promise, and ask your healthcare provider if any are right for you.


