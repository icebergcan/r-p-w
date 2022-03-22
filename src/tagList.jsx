import React from "react";
import Tag from "./tag";

const List = [
    'CAT',
    'Chengong',
    'Heli',
    'Hitiac',
    'Komatsu',
    'Livgong',
    'Shantui',
    'Shaanxi',
    'Xyma',
    'XCcling',
    'Амкадор',
    'АТЗ',
    'ВТТЗ',
    'ДОН',
    'ЛТЗ',
    'МТЗ',
    'ПТЗ',
    'Четра',
    'ЦТЗ'
];

const listLength = List.length;

// List.forEach (function(nam) {
//     console.log(nam)
// })

let completeTag

for (let i = 0; i < List.length; i++) {
    completeTag = List[i]
    console.log(completeTag)
}

    

// console.log(co)


function compTag () {
    return (
        completeTag
    )
}


export default compTag

