import React, { Fragment, useState } from 'react'
import Header from './Header'
import './records.scss'
import Section from './Section'
import List from './List'
import Form from './Form'

const Container = () => {
  const [records, setRecords] = useState([])
  const [liveText, setLiveText] = useState('')

  const onSubmitHandler = (entry) => {
    setRecords(
      [...records, entry].sort((a, b) => {
        if (a.recordName === b.recordName) return 0
        return a.recordName > b.recordName ? 1 : -1
      })
    )

    setLiveText(`${entry.recordName} successfully add.`)
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

export default Container
