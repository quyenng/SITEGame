# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Quyen Nguyen

Time spent: 8 hours spent in total

Link to project: https://glitch.com/edit/#!/erratic-spectacled-zydeco

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![]https://recordit.co/DR1KNSKajS


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I used stackoverflow's and w3schoool's resources to find out more about built in JavaScript that I haven't worked with in a while. 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
A challenge I encountered in creating this submission was making the pattern (both sound and light) speed up as the user progresses through the game. When implementing the "3-strikes" functionality, I originally included an alert to let the user know that they should reattempt the pattern. After which, the app was intended to play the pattern again, before accepting input from the user. However, I did not account for the fact that the delay would not be halted while the alert was processed by both the computer and the user. As such, the replay of the pattern was off and was incomprehensible to the user. I overcame this issue by using the console log to print out the delay value calculated at different points in the playSequence function. When I noticed that the mathematical calculations were correct, I had to continue running test cases with mistakes in various places - which helped me notice that the issue was more pronounced when I would pause longer on the alert. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
After completing my submission, my question is which is the better way to handle user interaction: html inline event handler versus javascript event handler. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had a few more hours, I would like to work on the timer feature and improve my style sheet to make the game look more attractive. 



## License

    Copyright Quyen Nguyen

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    