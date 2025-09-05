# Data Converter

엑셀(XLS, XLSX, XLSM), CSV, XML 파일을 JSON 및 PHP 배열 코드로 변환하는 웹 기반 도구입니다.

## 🌟 주요 기능

-   **다양한 파일 형식 지원**: Excel (.xls, .xlsx, .xlsm), CSV, XML
-   **드래그 앤 드롭**: 파일을 쉽게 업로드
-   **프리셋 시스템**: 자주 사용하는 설정을 미리 저장
-   **자동 데이터 타입 변환**: 숫자, 불린, 문자열 자동 인식
-   **키-값 객체 및 배열 지원**: 다양한 JSON 구조 생성
-   **PHP 배열 코드 생성**: JSON을 PHP 배열 코드로 변환
-   **데이터 복원**: 이전 작업 세션 자동 복원
-   **🔒 완전한 보안**: 모든 처리가 브라우저 내에서 실행되며 서버로 데이터 전송 없음

## 🔐 보안 및 개인정보 보호

-   ✅ **로컬 처리**: 모든 파일 처리가 브라우저 내에서만 실행
-   ✅ **서버 전송 없음**: 파일이나 데이터가 외부 서버로 전송되지 않음
-   ✅ **데이터 보안**: 민감한 데이터도 안전하게 처리 가능
-   ℹ️ **인터넷 연결 필요**: CDN을 통한 외부 라이브러리 로드를 위해 인터넷 연결 필요

## 📁 파일 구조

```
data-converter/
├── data-converter.html    # 메인 애플리케이션
├── presets.js            # 프리셋 설정 파일 (선택사항)
├── examples/             # 샘플 파일들
│   ├── Products.xlsx     # 제품 정보 샘플
│   ├── Employees.xlsx    # 직원 정보 샘플
│   ├── GameItems.xlsm    # 게임 아이템 샘플
│   ├── Sales.xlsx        # 매출 데이터 샘플
│   └── Settings.xlsx     # 설정 파일 샘플
└── README.md             # 이 파일
```

## 🚀 빠른 시작

1. **온라인에서 바로 사용**

    - 🌐 **[데모 페이지 열기](https://greatwanga.github.io/data-converter/data-converter.html)**

2. **샘플 파일 다운로드** (테스트용)

    - 📁 [Products.xlsx](https://github.com/greatwanga/data-converter/raw/main/examples/Products.xlsx) - 제품 정보 (키 있는 객체)
    - 👥 [Employees.xlsx](https://github.com/greatwanga/data-converter/raw/main/examples/Employees.xlsx) - 직원 정보
    - 🎮 [GameItems.xlsm](https://github.com/greatwanga/data-converter/raw/main/examples/GameItems.xlsm) - 게임 아이템
    - 📊 [Sales.xlsx](https://github.com/greatwanga/data-converter/raw/main/examples/Sales.xlsx) - 매출 데이터 (배열 형태)
    - ⚙️ [Settings.xlsx](https://github.com/greatwanga/data-converter/raw/main/examples/Settings.xlsx) - 설정 파일

3. **파일 다운로드**

    ```bash
    git clone https://github.com/greatwanga/data-converter.git
    cd data-converter
    ```

4. **브라우저에서 열기**
    - `data-converter.html` 파일을 더블클릭하여 브라우저에서 실행
    - ⚠️ **인터넷 연결이 필요합니다** (CDN 라이브러리 로드를 위해)

## 📋 사용법

### 1. 파일 업로드

-   **파일 선택** 버튼 클릭 또는 **드래그 앤 드롭**으로 파일 업로드
-   지원 형식: `.xlsx`, `.xlsm`, `.xls`, `.csv`, `.xml`
-   🔒 **파일은 브라우저 내에서만 처리되며 외부로 전송되지 않습니다**

### 2. 시트 선택

-   Excel 파일의 경우 변환할 시트를 선택

### 3. 컬럼 및 헤더 설정

-   **헤더 행**: 첫 번째 컬럼 클릭 시 해당 행이 헤더로 설정
-   **컬럼 선택**: 변환할 데이터 컬럼들을 클릭하여 선택
-   **키 컬럼 설정**: 선택된 컬럼을 다시 클릭하면 키 컬럼으로 설정 (🔑 아이콘 표시)

### 4. 데이터 변환

-   **JSON으로 변환**: JSON 형식으로 데이터 변환
-   **PHP코드로 변환**: PHP 배열 코드로 변환

### 5. 결과 활용

-   **복사**: 변환된 코드를 클립보드에 복사
-   **저장**: JSON 파일로 다운로드

## ⚙️ 프리셋 시스템

자주 사용하는 파일에 대한 설정을 미리 저장할 수 있습니다.

### presets.js 파일 생성

```javascript
window.presetsData = {
    "파일명.xlsx": {
        시트명: {
            headerRowIndex: 4, // 헤더 행 인덱스 (0부터 시작)
            selectedCols: [
                // 선택할 컬럼들
                {
                    index: 0, // 컬럼 인덱스
                    name: "id", // 속성명
                    autoTypeConversion: true, // 자동 타입 변환 여부
                },
            ],
            keyColIndex: 0, // 키 컬럼 인덱스 (null이면 배열로 변환)
        },
    },
};
```

### 프리셋 예시

```javascript
window.presetsData = {
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
                    index: 3,
                    name: "price",
                    autoTypeConversion: true,
                },
            ],
            keyColIndex: 0, // productId를 키로 사용
        },
    },
};
```

## 📊 변환 결과 예시

### 키가 있는 객체 형태

```json
{
    "P001": {
        "productName": "노트북",
        "price": 1200000
    },
    "P002": {
        "productName": "마우스",
        "price": 25000
    }
}
```

### 배열 형태 (키 없음)

```json
[
    {
        "month": 1,
        "region": "서울",
        "revenue": 15000000
    },
    {
        "month": 2,
        "region": "부산",
        "revenue": 8500000
    }
]
```

### 키-값 단순 매핑

```json
{
    "setting1": "value1",
    "setting2": "value2"
}
```

## 🔧 고급 기능

### 자동 데이터 타입 변환

-   **숫자**: 숫자로만 구성된 데이터는 `number` 타입으로 변환
-   **불린**: `true`/`false` 값은 `boolean` 타입으로 변환
-   **문자열**: 나머지는 `string` 타입으로 변환
-   **수동 제어**: 각 컬럼별로 자동 변환 여부를 설정 가능

### 대용량 데이터 처리

-   **지연 로딩**: Intersection Observer를 사용한 점진적 데이터 표시
-   **메모리 최적화**: 필요한 데이터만 렌더링

### 데이터 복원

-   **자동 저장**: IndexedDB를 사용한 작업 세션 자동 저장
-   **복원 확인**: 페이지 재방문 시 이전 데이터 복원 여부 선택

## 🌐 브라우저 호환성

-   Chrome 60+
-   Firefox 55+
-   Safari 12+
-   Edge 79+

## 📝 라이선스

MIT License

## 📞 문의

프로젝트 링크: [https://github.com/greatwanga/data-converter](https://github.com/greatwanga/data-converter)

---

⭐ 이 프로젝트가 도움이 되었다면 별표를 눌러주세요!
