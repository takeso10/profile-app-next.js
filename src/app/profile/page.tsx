import SubHeader from "../../../components/subHeader";
import Image from 'next/image'

export default function Profile (){
    return(
        <div>
            <SubHeader></SubHeader>
            <div>
                <h2>初めまして竹内颯汰です。</h2>
                <Image src="/kinggnulive.jpg" alt="profile Image" width={400} height={300}/>
            </div>
            <div>
                <h2>竹内颯汰</h2>
                <p>2001/10/08</p>
                <p>茨城県土浦市出身</p>
                <p>土浦第一高校卒業</p>
                <p>筑波大学理工学群社会工学類卒業</p>
            </div>
        </div>
    )
}