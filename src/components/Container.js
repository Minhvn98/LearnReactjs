import React, { Fragment, useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Header from './Header'
import './records.scss'
import Section from './Section'
import List from './List'
import Form from './Form'

const sortRecords = (records) =>
  records.sort((a, b) => {
    if (a.recordName === b.recordName) return 0
    return a.recordName > b.recordName ? 1 : -1
  })

const Container = ({ setShowApp }) => {
  const [records, setRecords] = useState([])
  const [liveText, setLiveText] = useState('')
  const isMounted = useRef(true)

  useEffect(() => {
    axios.get('/api/records').then(({ data }) => {
      if (isMounted.current) {
        setRecords(sortRecords(data))
        console.log(data)
      }
    })
    return () => (isMounted.current = false)
  }, [])

  const onSubmitHandler = (entry) => {
    axios.post('/api/records', entry).then(({ data }) => {
      if (isMounted.current) {
        setRecords([...data])
        setLiveText(`${entry.recordName} successfully add.`)
      }
    })

    setShowApp(false)
  }

  return (
    <Fragment>
      <Header />
      <main>
        <Section headingText="Add a new favourite">
          <Form onSubmit={onSubmitHandler}></Form>
        </Section>

        <Section headingText="Records">
          <List records={records}></List>
        </Section>
      </main>
      <div className="visually-hidden" aria-live="polite" aria-atomic="true">
        {liveText}
      </div>
    </Fragment>
  )
}

const Wrapper = () => {
  const [showApp, setShowApp] = useState(true)

  return showApp && <Container setShowApp={setShowApp}></Container>
}

export default Wrapper
