"use client" 
import styles from "./page.module.css"
import styled from 'styled-components'

const Article = styled.article`margin-top: 30px;`;

export default function BodySobre() {
    
    
    return (
        <>
            <h1 className={styles.center}>Sobre Animes</h1>

            <div className={styles.spacemargin}>

                <h1>Generos de animes</h1>

                <main>
                    <Article>
                        <h2>Shonen</h2>
                        <p>Focado em um público jovem masculino, geralmente apresenta ação, aventura e crescimento pessoal. <br />Exemplos incluem Naruto e My Hero Academia.</p>
                    </Article>

                    <Article>
                        <h2>Shojo</h2>
                        <p>Destinado ao público jovem feminino, esses animes costumam explorar temas de romance, amizade e drama emocional. <br />Exemplos são Sailor Moon e Fruits Basket.</p>
                    </Article>

                    <Article>
                        <h2>Seinen</h2>
                        <p>Voltado para adultos, com histórias mais complexas e temas maduros. Pode incluir violência, sexualidade e dilemas filosóficos. <br />Exemplos incluem Attack on Titan e Berserk.</p>
                    </Article>

                    <Article>
                        <h2>Josei</h2>
                        <p>Focado em mulheres adultas, aborda relacionamentos e a vida cotidiana de maneira realista. <br />Exemplos são Nana e Paradise Kiss.</p>
                    </Article>

                    <Article>
                        <h2>Isekai</h2>
                        <p>Envolve personagens que são transportados para outro mundo, muitas vezes com elementos de fantasia e aventura. <br />Exemplos incluem Sword Art Online e Re:Zero.</p>
                    </Article>

                    <Article>
                        <h2>Slice of Life</h2>
                        <p>Retrata a vida cotidiana de forma realista, focando em interações humanas e situações do dia a dia. <br />Exemplos são Clannad e March Comes in Like a Lion.</p>
                    </Article>

                    <Article>
                        <h2>Fantasia</h2>
                        <p>Inclui elementos mágicos e mundos fictícios, muitas vezes com criaturas míticas e aventuras épicas. <br />Exemplos incluem Fullmetal Alchemist e Made in Abyss.</p>
                    </Article>

                    <Article>
                        <h2>Terror/Suspense</h2>
                        <p>Explora temas de medo e mistério, muitas vezes com elementos sobrenaturais. <br />Exemplos são Another e Paranoia Agent.</p>
                    </Article>

                    <Article>
                        <h2>Mecha</h2>
                        <p>Foca em robôs gigantes e batalhas tecnológicas, frequentemente explorando temas de guerra e humanidade. <br />Exemplos incluem Neon Genesis Evangelion e Gundam.</p>
                    </Article>

                    <Article>
                        <h2>Comédia</h2>
                        <p>Tem um tom leve e divertido, com situações cômicas e personagens engraçados. <br />Exemplos são One Punch Man e KonoSuba.</p>
                    </Article>

                </main>
            </div>
        </>
    )
}