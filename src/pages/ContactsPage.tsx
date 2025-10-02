import contacts from '@/content/contacts'

export default function ContactsPage() {
  return (
    <div>
      <h1>{'Contact Us'}</h1>
      <ul>
        <li>{contacts.phone}</li>
        <li>{contacts.email}</li>
        <li>{contacts.address}</li>
      </ul>
    </div>
  )
}


