Hi!!
Before you run the code please make sure you are using react-native

to set-up this application there is a few things you have to run and download first

first open your documment folder then "right-click" then click opne in terminal then write this line of command first to make sure the code run smoothly

//creating the folder 
npx react-native@latest init BMICalculator

then after the folder has been created open the folder and "right-click" on the folder then choose open in terminal, then paste all of this code

// extention for the react native
npm install @react-native-async-storage/async-storage
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/stack
npm install react-native-gesture-handler
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
npm install @react-navigation/drawer

//vector icon
npm install react-native-vector-icons

// put this code on the "android/app/build.gradle" (to make the icon shown, to open the build.gradle file you can use the vscode by typing the "code ." in the terminal)
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")

after downloading all the asset you are ready to go!!

you just need to drag and drop the "Src" file that you download from github to you BMICalculator file that been created

to open the visual studio code you just have to open the BMICalculator folder then "right-click" on the folder and click the open in terminal
then write this command:
- "code ."

in the left side of you visual studio code there is index.js, you have to chaneg the "import App from 'App';" to  "import App from './Src/App';"

then open a new terminal and run it by typing 
npm run start

/////////OR///////////

you can download it directly on your handphone by enabling the USB debugging on your phone 

plug a cable from you PC to your Phone 

and write "npm run android" in the terminal

then after waiting a while there should be a pop-up message on your phone to download the application, then click yes

and the application will run smoothly

Thankyou to trying my apps, i hope you like it




