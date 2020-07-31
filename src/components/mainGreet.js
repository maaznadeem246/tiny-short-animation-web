import React,{useEffect,useState} from "react"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import useWebAnimations, {bounce,slideOutDown} from "@wellyshen/use-web-animations";
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
        fontSize:25,
        fontWeight:700,
        color:theme.typography.color,
        [theme.breakpoints.down('xs')]: {
            fontSize: 20,
            paddingTop: 30,
            paddingBottom: 20,
            paddingRight: 20,
            paddingLeft: 20,
        },
        '@media only screen and (max-width: 375px)': {
            fontSize: 17,
            paddingTop: 25,
            paddingBottom: 15,
            paddingRight: 15,
            paddingLeft: 15,
        },

        '@media only screen and (max-width: 320px)': {
            fontSize: 15,
        }
    },
    animatedLine:{
        overflow:'hidden',
        paddingTop:4,
        paddingBottom:4,
        '@media only screen and (max-width: 375px)': {
    
            paddingBottom: 1,
        },

        '@media only screen and (max-width: 320px)': {
            
            paddingBottom: 1,
        }
    },
    animatedBottomDiv:{
        display:'flex',
        fontSize: 16,
        paddingTop:60,
        paddingBottom: 15,
        justifyContent:'space-between',
        [theme.breakpoints.down('xs')]: {
            fontSize: 14,
            paddingTop: 30,
            paddingBottom: 20,
        },
        '@media only screen and (max-width: 375px)': {
            fontSize: 13,
            paddingTop: 25,
            paddingBottom: 20,
        },

        '@media only screen and (max-width: 320px)': {
            fontSize: 12,

            paddingBottom: 15,
        }
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
        background: 'linear-gradient(145deg, rgba(145,198,145,1) 0%, rgba(255,255,255,1) 86%)',
        position: 'absolute',
        borderRadius:5,
        zIndex: -1,
        display: 'flex',
        alignItems:'flex-end',
        
    },
    animatedDiv:{
        position: 'relative', width: '90%', margin: 'auto',
        paddingTop:60,
        [theme.breakpoints.down('md')]: {
            paddingTop: 20,
        },
    },
    insideAnimated:{
        backgroundColor: theme.typography.color,
        width:'100%',
        height:'40px',
        margin:20,
        borderRadius:5,
        [theme.breakpoints.down('md')]: {
        
            height: '30px',
            margin: 15,
        },
        '@media only screen and (max-width: 375px)': {
            height: '28px',
            margin: 13,
        },

        '@media only screen and (max-width: 320px)': {
            height: '23px',
            margin: 8,
        }
    },

    animmatdCircleBackground:{
        width:'400px',
        height:'400px',
        backgroundColor: theme.typography.color,
        borderRadius:"100%",
        position:'absolute',
        zIndex: -1,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        
        [theme.breakpoints.only('xs')]: {
            width: '350px',
            height: '350px',
        },
        '@media only screen and (max-width: 375px)': {
            width: '300px',
            height: '300px',
        },

        '@media only screen and (max-width: 320px)': {
            width: '270px',
            height: '270px',
        }
    },

    animatedOneText:{
        position: 'relative', 
        width: '90%', 
        height: '100%',
        margin: 'auto',
        paddingTop: 100,
        paddingBottom: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow:'hidden',
        [theme.breakpoints.down('md')]: {
            height: '400px',
        },
        '@media only screen and (max-width: 375px)': {
            height: '300px',
        },

        '@media only screen and (max-width: 320px)': {
            height: '300px',
        }
        
    },
    animatedOneInText:{
        color:'rgba(145,198,145,1)',
        fontSize:20,
        [theme.breakpoints.only('xs')]: {
            fontSize: 15,
        },
        '@media only screen and (max-width: 375px)': {
            fontSize: 13,
        },

        '@media only screen and (max-width: 320px)': {
            fontSize: 12,
        }
    },
    animatedOneInText2: {
        color: 'rgba(145,198,145,1)',
        fontSize: 30,
        [theme.breakpoints.only('xs')]: {
        fontSize: 25,
        },
        '@media only screen and (max-width: 375px)': {
            fontSize: 23,
        },

        '@media only screen and (max-width: 320px)': {
            fontSize: 20,
        }
    },
    animatedOneTextDiv:{
        textAlign:'left',
        marginTop:-90,
    },
    animatedSmall:{
        width:350,
        height:350,
        position:'absolute',
 
        borderRadius:'100%',
        border:'10px solid rgba(145,198,145,1)',
        // borderBottom:'10px solid black',
        // borderRight:'10px solid black',
        // transform:'rotate3d(1, 0, 0, 45deg) '
        [theme.breakpoints.only('xs')]: {
            width: '300px',
            height: '300px',
        },
        '@media only screen and (max-width: 375px)': {
            width: '250px',
            height: '250px',
            borderWidth: 9,
        },

        '@media only screen and (max-width: 320px)': {
            width: '220px',
            height: '220px',
            borderWidth: 8,
        }
    },
    animatedSmallInside:{
        width:20,
        height:20,
        position:'absolute',
        borderRadius:'100%',
        border: '20px solid rgba(145,198,145,1)',
        
        transform:'translateY(-100%)',
        [theme.breakpoints.only('xs')]: {
            borderWidth:15,
        },
        '@media only screen and (max-width: 375px)': {
            borderWidth: 12,
        },

        '@media only screen and (max-width: 320px)': {
            borderWidth: 12,
        }

    },
    animatedSmallDiv:{
        width:"100%",    
        height:'100%'
    },
    mDiv:{
        [theme.breakpoints.down('sm')]: {
            paddingBottom: 100 
        }


    }

  
}));


function AnimatedFadeText(){
    const classes = useStyles();
    const firstTextArray = [
        'We proive multiple Tech Services ',
        'We Provide AI service ',
        'We provide Cloud Services '
    ]
    const secondTextArray = [
        'We have Mulpile API Services',
        'Contact Us for your',
        'We provide new Tech',
        
    ]
    const thirdTextArray = [
        'We also have SMS API',
        'New Business',
        'Like Serverless',
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
                duration: 5000 - delayTime,
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

    const firstLine = useWebAnimations(animationObject(150,0.1));

    const secondLine = useWebAnimations(animationObject(180,0.2));

    const thirdLine = useWebAnimations(animationObject(210,0.3));

    const bottomLine = useWebAnimations(animationObject(230, 0.35));

    const animatedBackground = useWebAnimations({
        keyframes: [
            {
                offset: 0,
                width: '0%',
                opacity: '0',
                visibility: "visible"
            },
            {
                opacity: 0.5
            },
            {
                offset: 0.1,
                opacity: 1,
                width: '100%',
                visibility: "visible"
            },
            {
                offset: 0.9,
                width: '100%',
                visibility: "visible",
                opacity: 1,
            },
            ,
            {
                opacity: 0.5
            },
            {
                opacity: 0,
                width: '0%',
                visibility: "hidden"
            }
        ],
        timing: {
            delay:50,
            duration: 5000 - 50,
            fill: "both",
            ease: 'ease'
            //cubic-bezier(0.0, 0.0, 1.0, 0.95)
        },
        autoPlay: false,

    })    

    useEffect(()=>{
        // animate()
        // console.log(animatedBackground.getAnimation().effect.getTiming().duration)
        updateText({
            firstLine:firstTextArray[count],
            secondLine:secondTextArray[count],
            thirdLine: thirdTextArray[count],
        })
        //console.log('effect')
        animatedBackground.getAnimation().play()
        firstLine.getAnimation().play();
        secondLine.getAnimation().play();
        thirdLine.getAnimation().play();
        bottomLine.getAnimation().play();
  
    },[count])

    const changeItButton = (num) => {
        animatedBackground.getAnimation().finish()
        firstLine.getAnimation().finish();
        secondLine.getAnimation().finish();
        thirdLine.getAnimation().finish();
        bottomLine.getAnimation().finish();

        updateCount(num)
    }
    const changeIt = (v) => {
        animatedBackground.getAnimation().finish()
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
        <div className={classes.animatedDiv}>
            <div ref={animatedBackground.ref} className={classes.backgroundAnimated} >
                <div className={classes.insideAnimated}></div>
            </div>
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

const AnimatedOneText = () => {
    const classes = useStyles()
    const [pauseValue,setPausevalue] = useState(16);

    let animatedBackgroundSamll = useWebAnimations({
        keyframes: [
            {

                transform: 'translateY(0%)'
            },
            {
                
                transform: 'translateY(-60%)'
            },{
                transform: 'translateY(0%)'
            }

        ],
        timing: {

            duration: 400,
            fill: "both",
            ease: 'ease',
            direction: "alternate",
            // iterations: Infinity,
            //cubic-bezier(0.0, 0.0, 1.0, 0.95)
        },
        autoPlay: false,
        onUpdate: ({ playState, animate, animation }) => {
            // animatedOneBackground.getAnimation()
  
             if(playState=='finished' && !animation.pending && pauseValue != 0){
                // console.log(animatedOneBackground.getAnimation())
            //      animatedOneBackground.getAnimation().play()
            //      setPausevalue((pauseValue) => pauseValue + Math.ceil(animatedOneBackground.getAnimation().currentTime) + 100)
                 animatedOneBackground.animate({
                     keyframes: [
                         {
                             transform: "translateY(-" + pauseValue+"%)"
                         }

                     ],
                     timing: {
                         duration: 500,
                         fill: "both",
                         ease: 'ease',
                         // iterations: Infinity,
                         //cubic-bezier(0.0, 0.0, 1.0, 0.95)
                     }
                 }) 
                 setPausevalue((pauseValue) => pauseValue - 2)    
        }

        },
    })

    let animatedOneBackground = useWebAnimations({
        keyframes: [
            {
                transform:"translateY(0%)"
            },
            {
                transform: "translateY(-16%)"
            }

        ],
        timing: {
            delay: 50,
            duration: 1800,
            fill: "both",
            ease: 'ease',
            // iterations: Infinity,
            //cubic-bezier(0.0, 0.0, 1.0, 0.95)
        },
        autoPlay: true,
        onUpdate: ({ playState, animate, animation }) => {
            // Triggered when the animation enters the running state or changes state
            // console.log(pauseValue)
            // console.log(Math.ceil(animation.currentTime))
//            console.log((animation.effect.getTiming().duration / 2)+4 == Math.ceil(animation.currentTime))
//             if (playState == 'running' && (animation.effect.getTiming().duration / 2) + 4 == Math.ceil(animation.currentTime) ){
//   //              console.log(animation.effect.getTiming().duration / 2 == Math.ceil(animation.currentTime))
//                 console.log(Math.ceil(animation.currentTime))
//                 animation.pause()
     
     

//             } else
            if (playState == 'finished') {
                animatedBackgroundSamll.getAnimation().play()

            }
        },
    }) 




    let animatedSmallDiv = useWebAnimations({
        keyframes: [
            {
                transform: 'rotateZ(360deg)',

            }

        ],
        timing: {
            delay: 50,
            duration: 2000,
            fill: "both",
            ease: 'ease',
            iterations: Infinity,
            //cubic-bezier(0.0, 0.0, 1.0, 0.95)
        },
        autoPlay: true,

    }) 

    useEffect(()=>{
        if(pauseValue == 0){
            setPausevalue(16)
            animatedOneBackground.getAnimation().finish()
            animatedOneBackground.getAnimation().play()
        }
    }, [pauseValue])

    return (
        <div className={classes.animatedOneText}>
            <div ref={animatedOneBackground.ref}  className={classes.animmatdCircleBackground}>
                <div ref={animatedSmallDiv.ref} className={classes.animatedSmallDiv}>
                    <div className={classes.animatedSmall}>

                    </div>
                </div>
                <div ref={animatedBackgroundSamll.ref} className={classes.animatedSmallInside}>

                </div>
            </div>
            <div className={classes.animatedOneTextDiv}>
                <div className={classes.animatedOneInText}>
                HI, We are Future Tech,
                </div>
                <div className={classes.animatedOneInText2}>
                    We're here to help you
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
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <AnimatedOneText />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} className={classes.mDiv}>
                    <AnimatedFadeText />
                </Grid>
            </Grid>            
        </div>
    )
}
export default MainGreet;