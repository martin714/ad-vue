# skyway

## Project setup
**How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.**

I took a day to read the VueJs documentation and scope out the requirements that I would need to complete this project. Although I was given the option to choose what to use, I felt I would show my ability and strengths by learning a new framework.
Overall, it took me 2 days after work to code the application. An issue I faced was I had an ‘Allow CORS’ plugin installed on chrome tools, so I noticed when I tested cross browsers that this request was being blocked. I created a proxy in the vue.config.js file to resolve this issue.
If I was to add addition features to this application, I would Integration of a test payment gateway along with the ability to have a customised login area with recommended events based one previous selected tickets, using the event genre data.

**What steps did you take to make sure your application is extensible/scalable and maintainable?**

Another part of the reason I chose to use Vue is due to it being scalable on single page applications, the small initial framework size, and the ease of adding a new library to the project. The built-in solutions in Vue have also saved me time composing components and cut down coding time.
Firstly, when I installed Vue in only installed the necessary dependencies for this application within initial setup using vue-cli. I added comments in the code so that if someone is working within this project, they will be able to understand my logic. I have split elements into individual components so that in the future these can be reused, and the elements can be easily maintained. 


## Project setup
```
git clone https://github.com/martin714/ad-vue.git
npm install
npm run serve -- --port 8081
```

### Project View
![Untitled-3](https://user-images.githubusercontent.com/32313044/165504286-4409557f-bf80-4bd7-b3e9-e56a4dea3820.jpg)

#### Search functionality View
![screencapture-localhost-8081-2022-04-27-12_08_37](https://user-images.githubusercontent.com/32313044/165505574-2b89b3ea-febf-4478-8193-f1a7102a43dd.png)

