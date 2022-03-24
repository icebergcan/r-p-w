import React from "react";
import Tag from "./tag";


const rows = [
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
        id: '775a58af-c077-4b1e-b313-ad1a8d4bd29c',
        idInt: 1,
        name_ru: 'Cyma',
        name_en: 'Heli',
        createdAt: '2022-03-17T07:29:20.614Z',
        updatedAt: '2022-03-17T07:29:20.614Z',
        deletedAt: null
      },
      {
        id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
        idInt: 17,
        name_ru: 'Cyma',
        name_en: 'Chengong',
        createdAt: '2022-03-17T08:20:25.132Z',
        updatedAt: '2022-03-17T08:20:25.132Z',
        deletedAt: null
      },
      {
        id: '775a58af-c077-4b1e-b313-ad1a8d4bd29c',
        idInt: 1,
        name_ru: 'Cyma',
        name_en: 'Hitiac',
        createdAt: '2022-03-17T07:29:20.614Z',
        updatedAt: '2022-03-17T07:29:20.614Z',
        deletedAt: null
      },
      {
        id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
        idInt: 17,
        name_ru: 'Cyma',
        name_en: 'Komatsu',
        createdAt: '2022-03-17T08:20:25.132Z',
        updatedAt: '2022-03-17T08:20:25.132Z',
        deletedAt: null
      },
      {
        id: '775a58af-c077-4b1e-b313-ad1a8d4bd29c',
        idInt: 1,
        name_ru: 'Cyma',
        name_en: 'Livgong',
        createdAt: '2022-03-17T07:29:20.614Z',
        updatedAt: '2022-03-17T07:29:20.614Z',
        deletedAt: null
      },
      {
        id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
        idInt: 17,
        name_ru: 'Cyma',
        name_en: 'Shantui',
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
        id: '775a58af-c077-4b1e-b313-ad1a8d4bd29c',
        idInt: 1,
        name_ru: 'Cyma',
        name_en: 'Heli',
        createdAt: '2022-03-17T07:29:20.614Z',
        updatedAt: '2022-03-17T07:29:20.614Z',
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
        id: '775a58af-c077-4b1e-b313-ad1a8d4bd29c',
        idInt: 1,
        name_ru: 'Heli',
        name_en: 'Heli',
        createdAt: '2022-03-17T07:29:20.614Z',
        updatedAt: '2022-03-17T07:29:20.614Z',
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
        id: '775a58af-c077-4b1e-b313-ad1a8d4bd29c',
        idInt: 1,
        name_ru: 'Heli',
        name_en: 'Heli',
        createdAt: '2022-03-17T07:29:20.614Z',
        updatedAt: '2022-03-17T07:29:20.614Z',
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
        id: '775a58af-c077-4b1e-b313-ad1a8d4bd29c',
        idInt: 1,
        name_ru: 'Heli',
        name_en: 'Heli',
        createdAt: '2022-03-17T07:29:20.614Z',
        updatedAt: '2022-03-17T07:29:20.614Z',
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
        id: '775a58af-c077-4b1e-b313-ad1a8d4bd29c',
        idInt: 1,
        name_ru: 'Heli',
        name_en: 'Heli',
        createdAt: '2022-03-17T07:29:20.614Z',
        updatedAt: '2022-03-17T07:29:20.614Z',
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
        id: '775a58af-c077-4b1e-b313-ad1a8d4bd29c',
        idInt: 1,
        name_ru: 'Heli',
        name_en: 'Heli',
        createdAt: '2022-03-17T07:29:20.614Z',
        updatedAt: '2022-03-17T07:29:20.614Z',
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
        id: '775a58af-c077-4b1e-b313-ad1a8d4bd29c',
        idInt: 1,
        name_ru: 'Hhengong',
        name_en: 'Heli',
        createdAt: '2022-03-17T07:29:20.614Z',
        updatedAt: '2022-03-17T07:29:20.614Z',
        deletedAt: null
      },
      {
        id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
        idInt: 17,
        name_ru: 'Iitiac',
        name_en: 'Xyma',
        createdAt: '2022-03-17T08:20:25.132Z',
        updatedAt: '2022-03-17T08:20:25.132Z',
        deletedAt: null
      },
      {
        id: '775a58af-c077-4b1e-b313-ad1a8d4bd29c',
        idInt: 1,
        name_ru: 'Komatsu',
        name_en: 'Heli',
        createdAt: '2022-03-17T07:29:20.614Z',
        updatedAt: '2022-03-17T07:29:20.614Z',
        deletedAt: null
      },
      {
        id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
        idInt: 17,
        name_ru: 'Lhantui',
        name_en: 'Xyma',
        createdAt: '2022-03-17T08:20:25.132Z',
        updatedAt: '2022-03-17T08:20:25.132Z',
        deletedAt: null
      },
      {
        id: '775a58af-c077-4b1e-b313-ad1a8d4bd29c',
        idInt: 1,
        name_ru: 'Livgong',
        name_en: 'Heli',
        createdAt: '2022-03-17T07:29:20.614Z',
        updatedAt: '2022-03-17T07:29:20.614Z',
        deletedAt: null
      },
      {
        id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
        idInt: 17,
        name_ru: 'Lyma',
        name_en: 'Xyma',
        createdAt: '2022-03-17T08:20:25.132Z',
        updatedAt: '2022-03-17T08:20:25.132Z',
        deletedAt: null
      },
      {
        id: '775a58af-c077-4b1e-b313-ad1a8d4bd29c',
        idInt: 1,
        name_ru: 'Meli',
        name_en: 'Heli',
        createdAt: '2022-03-17T07:29:20.614Z',
        updatedAt: '2022-03-17T07:29:20.614Z',
        deletedAt: null
      },
      {
        id: '8a912154-2fc7-4548-8e43-12c4aa53e394',
        idInt: 17,
        name_ru: 'Oeli',
        name_en: 'Xyma',
        createdAt: '2022-03-17T08:20:25.132Z',
        updatedAt: '2022-03-17T08:20:25.132Z',
        deletedAt: null
      },
      {
        id: '775a58af-c077-4b1e-b313-ad1a8d4bd29c',
        idInt: 1,
        name_ru: 'Oyma',
        name_en: 'Heli',
        createdAt: '2022-03-17T07:29:20.614Z',
        updatedAt: '2022-03-17T07:29:20.614Z',
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
]

function TagList () {
    return(
    <>
            {rows.map((tag) =>(
                <Tag section={tag.name_ru} letter={tag.name_ru.toLowerCase().charAt(0)} />
            ))}
    </>
    )
}




export default TagList;

