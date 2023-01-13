export default {
  name: 'CEO',
  children: [
    {
      name: 'Dir. HR',
      children: [
        {
          name: 'Manager HR'
        }
      ]
    },
    {
      name: 'Dir. Marketing',
      children: [
        {
          name: 'GM-Sales',
        },
        {
          name: 'GM-CRM',
        },
      ],
    },
    {
      name: 'Dir. Operations',
    }
  ]
}
