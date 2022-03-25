import React from "react";
import Tag from "./tag";

const searchResult =[

//   {
//     id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
//     idInt: 17,
//     name_ru: 'Chengong',
//     name_en: 'Xyma',
//     createdAt: '2022-03-17T08:20:25.132Z',
//     updatedAt: '2022-03-17T08:20:25.132Z',
//     deletedAt: null
//   },
 
];

const SearchResultCount = searchResult.length

function SearchResult () {
    let firtstLetter = ''
    return (
      <>
        {searchResult.map(row => {
          if (firtstLetter !== row.name_ru.charAt(0)) {
            firtstLetter = row.name_ru.charAt(0)
              return <Tag key={row.id} section={row.name_ru} letter={firtstLetter.toLowerCase()}/>
          } else {
              return <Tag key={row.id} section={row.name_ru}/>
          }
        })}
            
      </>
    );
}


export {SearchResult, SearchResultCount}