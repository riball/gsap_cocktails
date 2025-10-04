import react from 'react';
import {featureLists, goodLists} from "../../constants/index.js";
import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
const Art = () => {
    const isMobile = useMediaQuery({maxWidth:767});
    useGSAP(()=>{
        const start = isMobile ? 'top 20%' : 'top top';
        const maskTimeline = gsap.timeline({
            scrollTrigger:{
                trigger:'#art',
                start,
                end:'bottom center',
                pin:true,
                scrub:1.5
            }
        })
            maskTimeline
                .to('.will-fade',{
                    stagger:0.2,
                    opacity:0,
                    ease:'power1.inOut',
                })
                .to('.masked-img',{
                    scale:1.3,
                    maskPosition:'center',
                    maskSize:'400%',
                    ease:'power1.inOut',
                    duration:1,

                })
                .to('#masked-content',{
                    opacity:1,
                    ease:'power1.inOut',
                    duration:1,
                })

        }


    );
    return (
        <section id='art'>
            <div className='container mx-auto pt-20 h-full'>
                <h2 className='will-fade'>the ART</h2>
                <div className='content'>
                    <ul className='space-y-4 will-fade'>
                        {goodLists.map((feature,index)=>(
                            <li key={index} className='flex items-center gap-2'>
                                <src img='/images/check.png' alt='Check' />
                                <p>{feature}</p>
                            </li>
                        ))}
                    </ul>

                    <div className='cocktail-img'>
                        <img src='/images/under-img.jpg' alt='cocktail'
                        className='abs-center masked-img size-full object-contain'
                        />


                    </div>
                    <ul className='space-y-4 will-fade'>
                        {featureLists.map((feature,index)=>(
                            <li key={index} className='flex items-center justify-start gap-2'>
                                <img src='/images/check.png' alt='Check' />
                                <p className='md:w-fit w-60'>{feature}</p>
                            </li>
                        ))}
                    </ul>

                </div>
                <div className='masked-container '>
                    <h2 className='will-fade'>
                        Sip-Worthy Perfection
                    </h2>
                    <div id='masked-content' >
                        <h2>Made with Craft | Poured with Passion</h2>
                        <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Art;