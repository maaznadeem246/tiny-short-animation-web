import React,{useEffect,useState} from "react"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import useWebAnimations, {slideInUp,slideOutDown} from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    animatedText:{
        textAlign:'left',
        paddingTop:60,
        paddingBottom:30,
        paddingRight:30,
        paddingLeft: 30,
        fontSize:30,
        fontWeight:700,
        color:theme.typography.color,
    },
    animatedLine:{
        overflow:'hidden',
        paddingTop:4,
        paddingBottom:4,
    },
    animatedBottomDiv:{
        display:'flex',
        fontSize: 17,
        paddingTop:60,
        justifyContent:'space-between',
    },
    animatedBottomLine:{
        overflow:'hidden'
    }

  
}));


function AnimatedText(){
    const classes = useStyles();
    const firstTextArray = [
        'Lorem Ipsum is simply dummy text ',
        'Lorem Ipsum is simply ',
        'Lorem Ipsum is simply dummy '
    ]
    const secondTextArray = [
        'Lorem Ipsum is simply dummy text of the.',
        'Lorem Ipsum is simply dummy text',
        'Lorem Ipsum is simply ',
        
    ]
    const thirdTextArray = [
        'Lorem Ipsum is simply',
        'Lorem Ipsum is simply dummy',
        'Lorem Ipsum is simply dummy text of the.',
    ]
    const [count, updateCount] = useState(0)    
    const [text, updateText] = useState({
        firstLine:'',
        secondLine:'',
        thirdLine:'',
    })
   

    const animationObject = (delayTime, animateOffset) => {
        return {
            keyframes: [
                {
                    offset: 0,
                    transform: "translate3d(0, 100%, 0)",
                    visibility: "visible"
                },
                {
                    offset: animateOffset,
                    transform: "translate3d(0, 0, 0)",
                    visibility: "visible"
                },
                {
                    offset: 0.9,
                    transform: "translate3d(0, 0, 0)",
                    visibility: "visible",
                    opacity:1,
                },
                {
                    opacity:0.7
                },
                {
                    opacity: 0.3
                },
                {
                    offset: 1,
                    transform: "translate3d(0, 100%, 0)",
                    visibility: "hidden"
                }

            ]
            ,
            timing: {
                delay:delayTime,
                duration: 4000 - delayTime,
                fill: "both",

            },
            autoPlay: false,
            onUpdate: ({ playState, animate, animation }) => {
                // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
                if (playState === "finished") {

                    if (count < 2) {
                        updateCount((count) => count + 1)
                    } else {
                        updateCount(0)
                    }
                }

            },
        }
    }

    const firstLine = useWebAnimations(animationObject(50,0.1));

    const secondLine = useWebAnimations(animationObject(200,0.1));

    const thirdLine = useWebAnimations(animationObject(300,0.1));

    const bottomLine = useWebAnimations(animationObject(300, 0.2));


    useEffect(()=>{
        // animate()
        updateText({
            firstLine:firstTextArray[count],
            secondLine:secondTextArray[count],
            thirdLine: thirdTextArray[count],
        })
        firstLine.getAnimation().play();
        secondLine.getAnimation().play();
        thirdLine.getAnimation().play();
        bottomLine.getAnimation().play();
        console.log('effect')
    },[count])



//    console.log(slideInUp)
    return(
        <div className={classes.animatedText}>
            <div className={classes.animatedLine}>
                <div ref={firstLine.ref}>{text.firstLine}</div>
            </div>
            <div className={classes.animatedLine}>
                <div ref={secondLine.ref}>{text.secondLine}</div>
            </div>
            <div className={classes.animatedLine}>
                <div ref={thirdLine.ref}>{text.thirdLine}</div>
            </div>
            <div className={classes.animatedLine}>
                <div className={classes.animatedBottomDiv}>
                    <div className={classes.animatedBottomLine} >
                        <div ref={bottomLine.ref}>Bottom Text</div>
                    </div>
                    <div>buttons</div>
                </div>
            </div>
        </div>
    )
}


function MainGreet(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item xs={12} sm={12} md={6} lg={6}>1</Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <AnimatedText />
                </Grid>
            </Grid>
            
        </div>
    )
}
export default MainGreet;