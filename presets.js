window.presetsData = {
    "ItemSet.xlsm": {
        ItemSet: {
            headerRowIndex: 4, // 헤더 행 인덱스 (0부터 시작)
            selectedCols: [
                // 선택할 컬럼들
                {
                    index: 1, // 컬럼 인덱스
                    name: "id", // 속성명
                    autoTypeConversion: true, // 자동 타입 변환 여부 (false면 문자열로 고정)
                },
                {
                    index: 2,
                    name: "setGroupId",
                    autoTypeConversion: true,
                },
                {
                    index: 3,
                    name: "setEquipAmount",
                    autoTypeConversion: true,
                },
                {
                    index: 4,
                    name: "effectId",
                    autoTypeConversion: false,
                },
                {
                    index: 5,
                    name: "effect",
                    autoTypeConversion: true,
                },
            ],
            keyColIndex: 1, // 키 컬럼 인덱스 (null이면 키 컬럼 없음)
        },
    },
    "Products.xlsx": {
        Products: {
            headerRowIndex: 4,
            selectedCols: [
                {
                    index: 0,
                    name: "productId",
                    autoTypeConversion: false,
                },
                {
                    index: 1,
                    name: "productName",
                    autoTypeConversion: false,
                },
                {
                    index: 2,
                    name: "category",
                    autoTypeConversion: false,
                },
                {
                    index: 3,
                    name: "price",
                    autoTypeConversion: true,
                },
                {
                    index: 4,
                    name: "stock",
                    autoTypeConversion: true,
                },
            ],
            keyColIndex: 0,
        },
    },
    "Sales.xlsx": {
        MonthlySales: {
            headerRowIndex: 4,
            selectedCols: [
                {
                    index: 0,
                    name: "month",
                    autoTypeConversion: true,
                },
                {
                    index: 1,
                    name: "region",
                    autoTypeConversion: false,
                },
                {
                    index: 2,
                    name: "category",
                    autoTypeConversion: false,
                },
                {
                    index: 3,
                    name: "revenue",
                    autoTypeConversion: true,
                },
                {
                    index: 4,
                    name: "quantity",
                    autoTypeConversion: true,
                },
            ],
            keyColIndex: null,
        },
    },
};
