import NFT1 from '../assets/NFT1.avif'
import NFT2 from '../assets/NFT2.webp'
import NFT3 from '../assets/NFT3.avif'
import NFT4 from '../assets/NFT4.avif'
import NFT5 from '../assets/NFT5.jpg'
import NFT6 from '../assets/NFT6.png'
import NFT7 from '../assets/NFT7.webp'
import NFT8 from '../assets/NFT8.webp'
import NFT9 from '../assets/NFT9.png'
import NFT10 from '../assets/NFT10.webp'
import NFT11 from '../assets/NFT11.jpg'
import NFT12 from '../assets/NFT12.jpg'

import {
    isConnected,
    getAddress,
    signAuthEntry,
    signTransaction,
    requestAccess,
    setAllowed,
  } from "@stellar/freighter-api";

// export const isAppConnected = await isConnected();

// if (isAppConnected.isConnected) {
//   alert("User has Freighter!");
//   console.log(isConnected);
  
// }

export async function checkConnection(){
    const isAllowed = await setAllowed()
    if (isAllowed){
        return isAllowed
    }
}

export const retrievePublicKey = async () => {
    const accessObj = await requestAccess();
  
    if (accessObj.error) {
      return accessObj.error;
    } else {
      return accessObj.address;
      
    }
  };
  
  const result = retrievePublicKey();
  console.log(retrievePublicKey);
  

//   export const shortenPublicKey(publicKey){
//     if (publicKey.length >= 8){
//         return publicKey
//     }

//     const firstFourLetters = publicKey.slice(0,4)
//     const lastFourLetters = publicKey.slice(-4)
//     console.log(shortenPublicKey("ASDFGHJKL"));
    
//     return `${firstFourLetters}...${lastFourLetters}`
//   }

export const TOKENS = [
    {
        id: '1',
        token_name: "Test Token",
        image: `${NFT1}`,
        creator: "Stacy",
        address: "GA57GNDK589FH39GKO9",
        category: "Music",
        description: "Testing my token call",
        mintPrice: 2.5,
        totalSupply: 250,
        time: "",
        holder: [
            {
            id: '1',
            address: 'GO4039RFSLFONGI',
            holder_quantity: 59,
            holder_price: 4000,
            message: 'Optimistic'
        },
            {
            id: '2',
            address: 'GYJR48B8HS95N4U',
            holder_quantity: 9,
            holder_price: 40,
            message: 'Optimistic'
        },
            {
            id: '3',
            address: 'GWEU7937FNB6SY3',
            holder_quantity: 55,
            holder_price: 250,
            message: 'Best project'
        },
            {
            id: '4',
            address: 'GURFH58FMO5O46',
            holder_quantity: 100,
            holder_price: 40000,
            message: 'Nice project'
        },
            {
            id: '5',
            address: 'GUT4SH7JI9YHT71',
            holder_quantity: 600,
            holder_price: 80000,
            message: 'Awesome'
        },
            {
            id: '6',
            address: 'GTJY573K9GRC062',
            holder_quantity: 10,
            holder_price: 100,
            message: 'Worthwhile'
        },
            {
            id: '7',
            address: 'GOEJ4MVI44O4O7',
            holder_quantity: 7,
            holder_price: 20,
            message: 'Magnificent'
        },
            {
            id: '8',
            address: 'GPMWJI29NDS804',
            holder_quantity: 100,
            holder_price: 40000,
            message: 'Nice project'
        },
            {
            id: '9',
            address: 'GWEO48288480238',
            holder_quantity: 5,
            holder_price: 10,
            message: 'Superb'
        },
            {
            id: '10',
            address: 'G7DSJWIENJI2303',
            holder_quantity: 55,
            holder_price: 230,
            message: 'Nice'
        },
            {
            id: '11',
            address: 'GFKJUO8409090TE',
            holder_quantity: 1,
            holder_price: 10,
            message: 'Good'
        },
            {
            id: '12',
            address: 'GPGHR839J39DUE',
            holder_quantity: 115,
            holder_price: 700,
            message: 'Kudos'
        },
            {
            id: '13',
            address: 'GRY84849TJO4O4',
            holder_quantity: 1000,
            holder_price: 50000,
            message: 'Hearts out'
        },
            {
            id: '14',
            address: 'GHT48903I9KR3I',
            holder_quantity: 200,
            holder_price: 2400,
            message: 'Lit Project'
        },
            {
            id: '15',
            address: 'GWJUU3JEOI3O53',
            holder_quantity: 700,
            holder_price: 3600,
            message: 'Dope'
        },
            {
            id: '16',
            address: 'G5BNJO04039409',
            holder_quantity: 15,
            holder_price: 600,
            message: 'Spectacular'
        },
    ]
    },
    {
        id: '2',
        token_name: "Stacy Token",
        image: `${NFT2}`,
        creator: "Brown",
        address: "GH39DJ3OIKEKFKORMIO",
        category: "Art",
        description: "Testing my token call",
        mintPrice: 1.5,
        totalSupply: 100,
        time: ""
    },
    {
        id: '3',
        token_name: "Test Token",
        image: `${NFT3}`,
        creator: "Stacy",
        address: "GCU54970J67SH5IF79",
        category: "Photography",
        description: "Testing my token call",
        mintPrice: 10,
        totalSupply: 1_000,
        time: ""
    },
    {
        id: '4',
        token_name: "Test Token",
        image: `${NFT4}`,
        creator: "Stacy",
        address: "GRJFJFIPFKSKPWKLWI",
        category: "Art",
        description: "Testing my token call",
        mintPrice: 1.4,
        totalSupply: 10,
        time: ""
    },
    {
        id: '5',
        token_name: "Domino Token",
        image: `${NFT5}`,
        creator: "Dominoe",
        address: "GQEJJE8JE5URFROU3I",
        category: "Music",
        description: "Testing my token call",
        mintPrice: 5.5,
        totalSupply: 500,
        time: ""
    },
    {
        id: '6',
        token_name: "Alfa Token",
        image: `${NFT6}`,
        creator: "Alfa",
        address: "GKIJEJ3IEKRP3O4IJ",
        category: "Dance",
        description: "Testing my token call",
        mintPrice: 2.5,
        totalSupply: 20000,
        time: ""
    },
    {
        id: '7',
        token_name: "Shunar Token",
        image: `${NFT7}`,
        creator: "Shunar",
        address: "GYIU4U8345GOI03NJO4",
        category: "Movie",
        description: "Testing my token call",
        mintPrice: 500,
        totalSupply: 10,
        time: ""
    },
    {
        id: '8',
        token_name: "Kissbat Token",
        image: `${NFT8}`,
        creator: "Kissbat",
        address: "GCU54970J6757HI94J",
        category: "Dance",
        description: "Testing my token call",
        mintPrice: 100,
        totalSupply: 10,
        time: ""
    },
    {
        id: '9',
        token_name: "Drip Monkey Token",
        image: `${NFT9}`,
        creator: "Drip Monkey",
        address: "GJUYR8B0NJEOFKEOO",
        category: "Photography",
        description: "Testing my token call",
        mintPrice: 1.2,
        totalSupply: 1000,
        time: ""
    },
    {
        id: '10',
        token_name: "Symco Token",
        image: `${NFT10}`,
        creator: "Symco",
        address: "GINFDJU53EJ98JKO3I",
        category: "Art",
        description: "Testing my token call",
        mintPrice: 0.5,
        totalSupply: 10000,
        time: ""
    },
    {
        id: '11',
        token_name: "HardHat Token",
        image: `${NFT11}`,
        creator: "HardHat",
        address: "GZHFLK48HDNK05KP4",
        category: "Music",
        description: "Testing my token call",
        mintPrice: 6.5,
        totalSupply: 2000,
        time: ""
    },
    {
        id: '12',
        token_name: "Juni Token",
        image: `${NFT12}`,
        creator: "Juni",
        address: "GTOJNKKR9IMDJUR3P4",
        category: "Movie",
        description: "Testing my token call",
        mintPrice: 1,
        totalSupply: 10000,
        time: ""
    },
]

