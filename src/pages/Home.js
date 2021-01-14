import React, {useState} from 'react'
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import ActorGrid from '../components/actor/ActorGrid';
import {apiGet} from '../misc/config';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';
import CustomRadio from '../components/CustomRadio';



const Home = () => {

    const[input,setInput] = useState('');

    const [results , setResults] = useState(null);

    const [searchOption , setSearchOption] = useState('shows');

    const isShowsSearch = searchOption === 'shows';


    const onSearch = () => {
        //http://api.tvmaze.com/search/shows?q=men

        apiGet(`/search/${searchOption}?q=${input}`).then(result => {
            setResults(result);
            
        });

        
    }
    const onInputChange = el => {
      //console.log(el.target.value)
        setInput(el.target.value)
    }

    

        const  onKeyDown = el => {
            if(el.keyCode === 13) {
                onSearch();
            }
        };

        const onRadioChange = ev => {
            setSearchOption(ev.target.value);
        }

        const renderResults = () => {
            if(results && results.length === 0){
                return <div>No result</div>
            }
            if( results && results.length > 0){
            return   results[0].show ? ( 
            <ShowGrid data={results} />
            ) :(
            <ActorGrid data={results} />
            );

            }

            return null;
            
        }

   

    return (
        <MainPageLayout>
          <SearchInput type="text"  onChange={onInputChange} value={input} onKeyDown={onKeyDown} />
          <RadioInputsWrapper>
              <div>
                  <CustomRadio 
                 label="Shows" id="shows-search"  value="shows" checked={isShowsSearch} onChange = {onRadioChange}
                  />
              
              </div>
              <div>
              <CustomRadio 
                 label="Actor" id="actor-search"  value="people" checked={!isShowsSearch} onChange = {onRadioChange}
                  />
              
              </div>
         </RadioInputsWrapper>

         <SearchButtonWrapper>
         <button type="button" onClick={onSearch}>Search</button>
         </SearchButtonWrapper>
          
          {renderResults()}
             
        </MainPageLayout>
    );
}

export default Home
