import React,{useEffect,useState} from "react"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import useWebAnimations, {slideInUp,slideOutDown} from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
  
}));


function AnimatedText(){
    
    const textArray = [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'Lorem Ipsum is simply dummy text of the.',
        'Lorem Ipsum is simply dummy text of the second.'
    ]
    const [count, updateCount] = useState(0)    
    const [text, updateText] = useState('')
   
    const { ref, playState, getAnimation, animate } = useWebAnimations({
        keyframes: [
            {
                offset: 0,
                transform: "translate3d(0, 100%, 0)",
                visibility: "visible"
            },
            {
                offset: 0.1,
                transform: "translate3d(0, 0, 0)",
                visibility: "visible"
            },
            {
                offset: 0.9,
                transform: "translate3d(0, 0, 0)",
                visibility: "visible"
            },
            {
                offset: 1,
                transform: "translate3d(0, 100%, 0)",
                visibility: "hidden"
            }

        ]
        ,
        timing: {

            duration: 4000,
            fill: "both",

        },
        autoPlay: false,
        onUpdate: ({ playState, animate, animation }) => {
            // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
            if (playState === "finished") {
                // console.log(count)
                if(count < 2){
                // console.log('d')
                updateCount((count) => count + 1)
                }else{
                    // console.log('dd')
                    updateCount(0)
                }

                // console.log('finished')
            }
            
        },
    });


    useEffect(()=>{
        // animate()
        updateText(textArray[count])
        getAnimation().play();
        console.log('effect')
    },[count])



//    console.log(slideInUp)
    return(
        <div style={{overflow:'hidden'}}>
            <div ref={ref}>{text}</div>
        </div>
    )
}


function MainGreet(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item xs={12} sm={12} md={5} lg={5}>1</Grid>
                <Grid item xs={12} sm={12} md={7} lg={7}>
                    <AnimatedText />
                </Grid>
            </Grid>
            
        </div>
    )
}
export default MainGreet;