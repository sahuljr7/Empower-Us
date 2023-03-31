import React from 'react';
import Image from 'next/image';
function Sector({ src, children }: { src: any; children: React.ReactNode }) {
    
    return (
        <div className="mt-3 h-10 w-10 container">
            <Image
                src={src}
                alt='image'
                className='avatar'
            />
            <p className='desc'>{children}</p>
            <style jsx global> {`
                .avatar {
                    border-radius: 15px;
                    border-style: solid;
                    border-width: medium;
                    border-color: black;
                    padding-left: 3px;
                }

                .container {
                    border-radius: 20px;
                    margin: 10px;
                    display: flex;
                    padding: 15px;
                    box-shadow: 0.5px 0.5px 0.5px 0.5px grey;
                }
                .desc {
                    padding: 10px;
                }
            `}
            </style>
        </div>
    )
}

export default function InclusionSection() {
    
    let connection_diagram = require('../assets/connection.jpg').default
    let accessibility = require('../assets/accessible.jpg').default
    let hands_togehter = require('../assets/hands.jpg').default
    
    return (
        <div className='screen'>
            <Sector src={connection_diagram}>
                We allow people to make connections together whether doing events or just being together. When people
                are encourage to make a change together, it creates a physical and mental connection that lives forever
            </Sector>
            <Sector src={accessibility}>
                We enable people to access different events by making events public where anyone can come and be <b>included</b>. By
                being accessible to each and every person, we help foster their rights as human beings to be in a group but we also
                allow each and every person on our website to have a chance to make an impact to the world
            </Sector>
            <Sector src={hands_togehter}>
                This app helps foster <b>inclusivity</b> by bring people together and helps with gatherings. Our program specializes 
                in getting people together and creating a sense of community. After all, most change comes when people are together
                and can make sure that the change that they want to be made on the world, becomes true
            </Sector>
            <style jsx global> {`
                .screen {
                    width: 100%;
                    height: 100%
                }
            `}
            </style>
        </div>
    )
}