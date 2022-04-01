import React from "react";
import Tag from "./tag";

const rows =[
    {
    id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
    idInt: 17,
    name_ru: 'CAT',
    name_en: 'Xyma',
    createdAt: '2022-03-17T08:20:25.132Z',
    updatedAt: '2022-03-17T08:20:25.132Z',
    deletedAt: null
  },
  {
    id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
    idInt: 17,
    name_ru: 'Chengong',
    name_en: 'Xyma',
    createdAt: '2022-03-17T08:20:25.132Z',
    updatedAt: '2022-03-17T08:20:25.132Z',
    deletedAt: null
  },
  {
    id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
    idInt: 17,
    name_ru: 'Cicle',
    name_en: 'Xyma',
    createdAt: '2022-03-17T08:20:25.132Z',
    updatedAt: '2022-03-17T08:20:25.132Z',
    deletedAt: null
  },
  {
    id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
    idInt: 17,
    name_ru: 'Cyber',
    name_en: 'Xyma',
    createdAt: '2022-03-17T08:20:25.132Z',
    updatedAt: '2022-03-17T08:20:25.132Z',
    deletedAt: null
  },
  {
    id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
    idInt: 17,
    name_ru: 'Cyma',
    name_en: 'Xyma',
    createdAt: '2022-03-17T08:20:25.132Z',
    updatedAt: '2022-03-17T08:20:25.132Z',
    deletedAt: null
  },
  {
    id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
    idInt: 17,
    name_ru: 'Heli',
    name_en: 'Xyma',
    createdAt: '2022-03-17T08:20:25.132Z',
    updatedAt: '2022-03-17T08:20:25.132Z',
    deletedAt: null
  },
  {
    id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
    idInt: 17,
    name_ru: 'Hitiac',
    name_en: 'Xyma',
    createdAt: '2022-03-17T08:20:25.132Z',
    updatedAt: '2022-03-17T08:20:25.132Z',
    deletedAt: null
  },
  {
    id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
    idInt: 17,
    name_ru: 'Killer',
    name_en: 'Xyma',
    createdAt: '2022-03-17T08:20:25.132Z',
    updatedAt: '2022-03-17T08:20:25.132Z',
    deletedAt: null
  },
  {
    id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
    idInt: 17,
    name_ru: 'Komatsu',
    name_en: 'Xyma',
    createdAt: '2022-03-17T08:20:25.132Z',
    updatedAt: '2022-03-17T08:20:25.132Z',
    deletedAt: null
  },
  {
    id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
    idInt: 17,
    name_ru: 'АвтоВАЗ',
    name_en: 'Xyma',
    createdAt: '2022-03-17T08:20:25.132Z',
    updatedAt: '2022-03-17T08:20:25.132Z',
    deletedAt: null
  },
  {
    id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
    idInt: 17,
    name_ru: 'АвтоВАЗ',
    name_en: 'Xyma',
    createdAt: '2022-03-17T08:20:25.132Z',
    updatedAt: '2022-03-17T08:20:25.132Z',
    deletedAt: null
  },
  {
    id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
    idInt: 17,
    name_ru: 'Зеленка',
    name_en: 'Xyma',
    createdAt: '2022-03-17T08:20:25.132Z',
    updatedAt: '2022-03-17T08:20:25.132Z',
    deletedAt: null
  },
  {
    id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
    idInt: 17,
    name_ru: 'Зеленка',
    name_en: 'Xyma',
    createdAt: '2022-03-17T08:20:25.132Z',
    updatedAt: '2022-03-17T08:20:25.132Z',
    deletedAt: null
  },
  {
    id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
    idInt: 17,
    name_ru: 'Йод',
    name_en: 'Xyma',
    createdAt: '2022-03-17T08:20:25.132Z',
    updatedAt: '2022-03-17T08:20:25.132Z',
    deletedAt: null
  },
  {
    id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
    idInt: 17,
    name_ru: 'Йодид',
    name_en: 'Xyma',
    createdAt: '2022-03-17T08:20:25.132Z',
    updatedAt: '2022-03-17T08:20:25.132Z',
    deletedAt: null
  },
  {
    id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
    idInt: 17,
    name_ru: 'Калий',
    name_en: 'Xyma',
    createdAt: '2022-03-17T08:20:25.132Z',
    updatedAt: '2022-03-17T08:20:25.132Z',
    deletedAt: null
  },
  {
    id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
    idInt: 17,
    name_ru: 'Калий',
    name_en: 'Xyma',
    createdAt: '2022-03-17T08:20:25.132Z',
    updatedAt: '2022-03-17T08:20:25.132Z',
    deletedAt: null
  },
  {
    id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
    idInt: 17,
    name_ru: 'Кальций',
    name_en: 'Xyma',
    createdAt: '2022-03-17T08:20:25.132Z',
    updatedAt: '2022-03-17T08:20:25.132Z',
    deletedAt: null
  },
  {
    id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
    idInt: 17,
    name_ru: 'Перфоратор',
    name_en: 'Xyma',
    createdAt: '2022-03-17T08:20:25.132Z',
    updatedAt: '2022-03-17T08:20:25.132Z',
    deletedAt: null
  },
  {
    id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
    idInt: 17,
    name_ru: 'Руль',
    name_en: 'Xyma',
    createdAt: '2022-03-17T08:20:25.132Z',
    updatedAt: '2022-03-17T08:20:25.132Z',
    deletedAt: null
  },
  
];



function TagList () {

  let alphabetStyle = {
    gridTemplateRows: ""
  }
  
  for (let i = 0; i < rows.length/4; i++) {
    alphabetStyle.gridTemplateRows += " 1fr"
  };

    let firstLetter = ''
    return (
      <div className="alphabet" style={alphabetStyle}>
        {rows.map(row => {
          if (firstLetter !== row.name_ru[0]) {
            firstLetter = row.name_ru[0]
              return <Tag 
                key={row.id} 
                section={row.name_ru} 
                letter={
                  <div className="letter">
                    {firstLetter.toLowerCase()}
                  </div>}
              />
          } else {
              return <Tag  
                key={row.id} 
                section={row.name_ru}
                letter={null}
              />
          }
        })}
      </div>      
    );
}


export default TagList