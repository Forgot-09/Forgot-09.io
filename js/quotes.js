quotes = [
    {
        quote : "Only dead fish go with a flow",
        toKorean : "오직 죽은 물고기만이 물결을 따라 움직안디",
        quoteBy : "Andy Hunt"
    },
    {
        quote : "It's risky to climb on th branch, but that's where all the fruit is.",
        toKorean : "나무 가지 꼭대기로 올라가는건 위험요소가 크지만, 열매는 모두 그곳에 있다",
        quoteBy : "Rose Winn"
    },
    {
        quote : "The greatest discovery of my generation is that man can alter his life simply by altering his attitude of mind",
        toKorean : "나의 세대에 가장 위대한 발견은 자기 마음자세를 고치기만 하면 인생까지도 고칠수 있다는 것이다",
        quoteBy : "Willim James"
    },
    {
        quote : "Every horse thinks its own pack heaviest",
        toKorean : "모든 말은 자신이 진 짐이 가장 무겁다고 생각한다",
        quoteBy : "Thomas Fuller"
    },
    {
        quote : "Two men look out through the same bars, one sees the mud and the other the stars",
        toKorean : "두 사람이 같은 창으로 밖을 본다, 한 사람을 진흙을 보고 다른 한 사람은 별을 본다",
        quoteBy:"Frederick Langbridge"
    },
    {
        quote : "Miracle happen to only those who believe in them",
        toKorean : "기적은 그것을 믿는 사람에게만 일어난다",
        quoteBy : "Bernard Berenson"
    },
    {
        quote : "Kindness is hard thing to give away, it keeps coming back to the giver",
        toKorean : "친절은 주기 어렵다, 계속해서 준 사람에게 돌아오기 때문이다",
        quoteBy : "Ralph Scott"
    },
    {
        quote : "Never underestimeate your power to change yourslef; never over time your power to change others",
        toKorean : "자신을 변화 시킬 수 있는 능력을 과소평가 하지 말고 남을 변화시킬 수 있는 능력을 과대평가 하지 마세요",
        quoteBy : "H. Jackson Brown, Jr"
    },
    {
        quote : "Growing old is mandatory; growing up is optional",
        toKorean : "나이가 드는건 필수이다, 하지만 성장하는것은 선택이다",
        quoteBy : "Carroll Bryant"
    },
    {
        quote : "The world will not change until we do",
        toKorean : "세계는 우리가 변화하기 전까지 변화하지 않을것이다",
        quoteBy : "Jim Wallis"
    },
    {
        quote : "Success consists of getting up just one more time than you fail",
        toKorean : "성공은 실패한 횟수보다 한번더 일어서는 것으로 이루어집니다",
        quoteBy : "Oliver Goldsmith"
    }
]

const quote = document.querySelector("#quote p:first-child");
const Korean = document.querySelector("#quote span:nth-child(2)")
const author = document.querySelector("#quote span:nth-child(3)")
const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuotes.quote;
Korean.innerText = todaysQuotes.toKorean;
author.innerText = `- ${todaysQuotes.quoteBy}`;