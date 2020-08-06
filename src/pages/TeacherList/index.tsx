import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';


// import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
import Select from '../../components/Select';

function TeacherList() {
    return (
      <div id="page-teacher-list" className="container">
        <PageHeader title="Estes são os proffys disponíveis.">
          <form id="search-teachers">

          <Select 
              name="subject" 
              label="Matéria"
              options={[
                  { value: 'Artes', label: 'Artes'},
                  { value: 'Biologia', label: 'Biologia'},
                  { value: 'Ciencia', label: 'Ciencia'},
                  { value: 'Ed. Fisica', label: 'Ed. Fisica'},
                  { value: 'fisica', label: 'fisica'},
                  { value: 'Historia', label: 'Historia'},
              ]}
          />

          <Select 
              name="week" 
              label="Dia da semana"
              options={[
                  { value: '0', label: 'Domingo'},
                  { value: '1', label: 'Segunda-Feira'},
                  { value: '2', label: 'Terça-Feira'},
                  { value: '3', label: 'Quarta-Feria'},
                  { value: '4', label: 'Quinta-Feira'},
                  { value: '5', label: 'Sexta-Feira'},
                  { value: '6', label: 'Sabado'},
              ]}
          />
           {/* <Input name="week" label="Dia da semana"/> */}
           <Input type="time" name="time" label="Hora"/>
          </form>
        </PageHeader>
  
        <main>
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
        </main>
      </div>
    );
  }

export default TeacherList;