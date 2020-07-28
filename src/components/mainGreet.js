import React,{useEffect,useState} from "react"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import useWebAnimations, {slideInUp,slideOutDown} from "@wellyshen/use-web-animations";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from '@material-ui/core/IconButton';

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
    },
    bottomAandB:{
        display:'flex',
        alignItems:'center',
    },
    arrowButton:{
        fontSize:'2rem',
    },
    arrowButtonBack:{
        transform:'rotate(180deg)'
    },

    smallButtons:{
        width:9,
        height:9,
        margin:6,
        border: '1px solid' + theme.typography.color,
        borderRadius:1.5,
        opacity:0.4,
        transform: 'rotate(139deg)',
        backgroundColor:theme.typography.color,
        transition:'opacity 0.4s linear',
        "&:hover":{
            opacity: 1,
        }
    },
    smallButtonsGroup:{
        display:'flex',
        paddingLeft:20,
        paddingRight:20,
    },
    backgroundAnimated:{
        height:'100%',
        width:'100%',

    }

  
}));


function AnimatedText(){
    const classes = useStyles();
    const firstTextArray = [
        '0Lorem Ipsum is simply dummy text ',
        '1Lorem Ipsum is simply ',
        '2Lorem Ipsum is simply dummy '
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
                    offset: 0.92,
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
                duration: 4500 - delayTime,
                fill: "both",
                ease:'ease'
//cubic-bezier(0.0, 0.0, 1.0, 0.95)
            },
            autoPlay: false,
            onUpdate: ({ playState, animate, animation: { pending }}) => {
                // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
               
                if (playState === "finished" && !pending) {
                    // console.log(playState)
                    // console.log(pending)

                    if (count < 2) {
                        // console.log(count)
                        updateCount((count) => count + 1)
                    } else {
                        updateCount(0)
                    }
                }

            },

        }
    }

    const firstLine = useWebAnimations(animationObject(100,0.1));

    const secondLine = useWebAnimations(animationObject(150,0.2));

    const thirdLine = useWebAnimations(animationObject(200,0.3));

    const bottomLine = useWebAnimations(animationObject(250, 0.35));


    useEffect(()=>{
        // animate()
       // console.log(firstTextArray[count])
        updateText({
            firstLine:firstTextArray[count],
            secondLine:secondTextArray[count],
            thirdLine: thirdTextArray[count],
        })
        //console.log('effect')
        firstLine.getAnimation().play();
        secondLine.getAnimation().play();
        thirdLine.getAnimation().play();
        bottomLine.getAnimation().play();
  
    },[count])

    const changeItButton = (num) => {
        firstLine.getAnimation().finish();
        secondLine.getAnimation().finish();
        thirdLine.getAnimation().finish();
        bottomLine.getAnimation().finish();

        updateCount(num)
    }
    const changeIt = (v) => {
      
        firstLine.getAnimation().finish();
        secondLine.getAnimation().finish();
        thirdLine.getAnimation().finish();
        bottomLine.getAnimation().finish();
        if(v=='next'){

            if (count < 2) {
                updateCount((count) => count + 1)
            } else {
                updateCount(0)
            }
        }else if(v=='back'){
            if (count <= 2 && count > 0) {
                updateCount((count) => count - 1)
            } else {
                updateCount(2)
            }
        }
    }

//    console.log(slideInUp)
    return(
        <div>
        <div className={classes.backgroundAnimated} />
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
                    <div  >
                        <div className={classes.animatedBottomLine} ><div ref={bottomLine.ref}>Bottom Text</div></div>
                    </div>
                    <div className={classes.bottomAandB}>
                            <div className={classes.smallButtonsGroup}>
                                <div onClick={() => { changeItButton(0)}} className={classes.smallButtons}  style={count == 0 ? {opacity:1} : {}} ></div>
                                <div onClick={() => { changeItButton(1) }} className={classes.smallButtons} style={count == 1 ? { opacity: 1 } : {}} ></div>
                                <div onClick={() => { changeItButton(2) }} className={classes.smallButtons} style={count == 2 ? { opacity: 1 } : {}} ></div>
                            </div>
                            <ArrowBackIosIcon className={classes.arrowButtonNext} onClick={()=>{changeIt('back')}} />                   
                            <ArrowBackIosIcon className={classes.arrowButtonBack} onClick={() => { changeIt('next')}}/>
                       
                    </div>
                </div>
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