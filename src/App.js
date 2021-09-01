import Header from './Header.js';
import MoviesList from './MoviesList.js';

export default function App () {
    return (
        <>
            <Header />
            <MoviesList movies={movies} />
        </>
    );
}

const movies = [
    {
        id: 0,
        title: "2067",
        img: "https://s3-alpha-sig.figma.com/img/00b4/737f/db39d65a7e5e7912d02062f7a1269acc?Expires=1631491200&Signature=hxoOVBY6raS8z9XpEx54jJcTV4HavmRi9a2hYLGg8rvXVmRBg5FazjiOrtWcJf3VIHhib2hoeG-9KXM4ES0IjmQNbfnlMjg2OtCAzAxsvttAxiMCjz1aTt9i8IQ7I5JKLbSblzvknt8xk2y7eoy-kve0V9whVBeWHDwugndMK~iWKtckzdCmEqr5romP9ytIbPhIWJkHcEb2utYj7uSQ544tT1BmRLxhDhbQR8jcIkUu6kTm8vv5iusz7siz90e-xfLHzsETpFFNUcAvnqKVVcueiIj9r90uEUO8aeQ4TCYrgYK1SJE5NwCr-3~pByIIuOT0H5TlKkq~5HDxO3U3Dw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
        id: 1,
        title: "Enola Holmes",
        img: "https://s3-alpha-sig.figma.com/img/618b/6ff1/fa721ddf7d65b2db581bec36dd2855dd?Expires=1631491200&Signature=Gvbnj96A8fyXrd49O4AS93u2Bt6ZDoL1Wi0IamiXj7owgVqFPuwQgabl5ft5SmNFihLKSrNSAdI0Q8aXx4EmmJJsS6GuQxI53JGLNVJLvtGCrOXi2cRRmCNT-AlYB4LIfKxxIS1CHc7kXmRe9Yte26xvonJEFLOc5p6qHhYx9AOlhLoR4~F2gvH4ols0KnZzOWlltdVbWNtbXgWJVIjy1PE0xFBf2UV1uMf4Pd0QhTcqrCpa0LoEOf7d7GCzjz771HguI~ibks94pmNGK7SNb9PLM8AUv42j3AtqVL9w12l7v9kqhXPij5EDB~mr4jr3rU6ZmWlBUlDIczPvlX8-uA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    }
];