import { BigInt } from '@graphprotocol/graph-ts'

import { TransferSingle as TransferSingleEvent } from '../../generated/PointsHook/PointsHook'
import { PointsBalance, PointsTransfer } from '../../generated/schema'

export function handleTransferSingle(event: TransferSingleEvent): void {
  const operator = event.params.operator.toHexString()
  const from = event.params.from.toHexString()
  const to = event.params.to.toHexString()
  const tokenId = event.params.id
  const amount = event.params.amount

  // --- PointsTransfer record ---
  const transferId = event.transaction.hash.toHexString() + '-' + event.logIndex.toString()
  const transfer = new PointsTransfer(transferId)
  transfer.operator = operator
  transfer.from = from
  transfer.to = to
  transfer.tokenId = tokenId
  transfer.amount = amount
  transfer.timestamp = event.block.timestamp
  transfer.blockNumber = event.block.number
  transfer.transactionHash = event.transaction.hash.toHexString()
  transfer.logIndex = event.logIndex

  // --- PointsBalance for recipient ---
  const balanceId = to + '-' + tokenId.toString()
  let balance = PointsBalance.load(balanceId)
  if (balance === null) {
    balance = new PointsBalance(balanceId)
    balance.owner = to
    balance.tokenId = tokenId
    balance.balance = BigInt.fromI32(0)
  }

  // On mint (from == address(0)), add to balance; on transfer, still credit the recipient
  balance.balance = balance.balance.plus(amount)

  // If this is a transfer (not a mint), deduct from sender's balance
  const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
  if (from != ADDRESS_ZERO) {
    const senderBalanceId = from + '-' + tokenId.toString()
    let senderBalance = PointsBalance.load(senderBalanceId)
    if (senderBalance !== null) {
      senderBalance.balance = senderBalance.balance.minus(amount)
      senderBalance.save()
    }
  }

  transfer.pointsBalance = balanceId

  balance.save()
  transfer.save()
}
