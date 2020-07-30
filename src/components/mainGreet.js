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
    },
    animatedLine:{
        overflow:'hidden',
        paddingTop:4,
        paddingBottom:4,
    },
    animatedBottomDiv:{
        display:'flex',
        fontSize: 16,
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
        paddingBottom:60,
    },
    insideAnimated:{
        backgroundColor: theme.typography.color,
        width:'100%',
        height:'40px',
        margin:20,
        borderRadius:5,
    },

    animmatdCircleBackground:{
        width:'450px',
        height:'450px',
        backgroundColor: theme.typography.color,
        borderRadius:"100%",
        position:'absolute',
        zIndex: -1,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },

    animatedOneText:{
        position: 'relative', 
        width: '90%', 
        height: '100%',
        margin: 'auto',
        paddingTop: 60,
        paddingBottom: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow:'hidden',
    },
    animatedOneInText:{
        color:'rgba(145,198,145,1)',
        fontSize:20
    },
    animatedOneInText2: {
        color: 'rgba(145,198,145,1)',
        fontSize: 35
    },
    animatedOneTextDiv:{
        textAlign:'left',
        marginTop:-90,
    },
    animatedSmall:{
        width:400,
        height:400,
        position:'absolute',
 
        borderRadius:'100%',
        border:'10px solid rgba(145,198,145,1)',
        // borderBottom:'10px solid black',
        // borderRight:'10px solid black',
        // transform:'rotate3d(1, 0, 0, 45deg) '
    },
    animatedSmallInside:{
        width:20,
        height:20,
        position:'absolute',
        borderRadius:'100%',
        border: '20px solid rgba(145,198,145,1)',
        
        transform:'translateY(-100%)'
    },
    animatedSmallDiv:{
        width:"100%",    
        height:'100%'
    }

  
}));


function AnimatedFadeText(){
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
    let animatedBackgroundSamll = useWebAnimations({
            keyframes: [
                {
                    
                    transform: 'translateY(0%)'
                },
            {
                offset: 0.1,
                    transform: 'translateY(-60%)'
                }

            ],
            timing: {
                delay:2000,
                duration:600,
                fill: "both",
                ease: 'ease',
                // direction: "alternate",
                // iterations: Infinity,
                //cubic-bezier(0.0, 0.0, 1.0, 0.95)
            },
            autoPlay: false,
           
        })


    let animatedOneBackground = useWebAnimations({
        keyframes: [
            {
                transform:"translateY(0%)"
            },
            {
                transform: "translateY(-10%)"
            }
            ,
            {
                transform: "translateY(0%)"
            }

        ],
        timing: {
            delay: 50,
            duration: 2000,
            fill: "both",
            ease: 'ease',
            // iterations: Infinity,
            //cubic-bezier(0.0, 0.0, 1.0, 0.95)
        },
        autoPlay: true,
        onUpdate: ({ playState, animate, animation }) => {
            // Triggered when the animation enters the running state or changes state
//            console.log((animation.effect.getTiming().duration / 2)+4 == Math.ceil(animation.currentTime))
            if (playState == 'running' && (animation.effect.getTiming().duration / 2)+4 == Math.ceil(animation.currentTime) ){
  //              console.log(animation.effect.getTiming().duration / 2 == Math.ceil(animation.currentTime))
                console.log(Math.ceil(animation.currentTime))
                animation.pause()
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
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <AnimatedFadeText />
                </Grid>
            </Grid>            
        </div>
    )
}
export default MainGreet;