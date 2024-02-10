import Ticket from '@/app/models/ticket'
import { NextResponse } from 'next/server'

export async function GET (
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params

  const foundTicket = await Ticket.findOne({ _id: id })
  return NextResponse.json({ foundTicket }, { status: 200 })
}

export async function PUT (
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    const body = await req.json()
    const ticketData = body.formData

    const updateTicketData = await Ticket.findByIdAndUpdate(id, {
      ...ticketData
    })

    return NextResponse.json({ message: 'Ticket updated' }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Error', error }, { status: 500 })
  }
}

export async function DELETE (
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    await Ticket.findByIdAndDelete(id)
    return NextResponse.json({ message: 'Ticket Deleted' }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Error', error }, { status: 500 })
  }
}
