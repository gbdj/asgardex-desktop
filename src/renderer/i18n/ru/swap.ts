import { SwapMessages } from '../types'

const swap: SwapMessages = {
  'swap.state.pending': 'Обмениваю',
  'swap.state.success': 'Обмен совершён',
  'swap.state.error': 'Ошибка при обмене',
  'swap.input': 'Отдаете',
  'swap.output': 'Получаете',
  'swap.info.max.balance': 'Баланс актива ({balance})',
  'swap.info.max.balanceMinusFee': 'Баланс актива ({balance}) за вычетом комиссии обмена ({fee})',
  'swap.slip.title': 'Проскальзывание',
  'swap.slip.tolerance': 'Допуск по проскальзыванию',
  'swap.slip.tolerance.info':
    'Чем выше процент, тем большее проскальзывание вы допускаете. Большее проскальзывание включает также более широкий диапазон расчёта комиссий во избежание прерывания обмена.',
  'swap.slip.tolerance.ledger-disabled.info':
    'Чувствительность к проскальзыванию была отключена из-за технических проблем с Ledger.',
  'swap.streaming.interval': 'Interval',
  'swap.streaming.interval.info': 'Интервал между обменами, 10 блоков равно 1-минутному интервалу',
  'swap.streaming.quantity': 'Quanity',
  'swap.streaming.quantity.info': 'Количество мини-обменов, выполненных за интервал',
  'swap.errors.amount.balanceShouldCoverChainFee':
    'Комиссия транзакции {fee} должна покрываться вашим балансом (сейчас {balance}).',
  'swap.errors.amount.outputShouldCoverChainFee':
    'Исходящая комиссия {fee} должна покрываться получаемым количеством (сейчас {amount}).',
  'swap.errors.amount.thornodeQuoteError': '{error} : Настроить чек или ввести сумму',
  'swap.note.lockedWallet': 'Для обмена необходимо разблокировать кошелек',
  'swap.note.nowallet': 'Для обмена создайте или импортируйте кошелек',
  'swap.errors.asset.missingSourceAsset': 'Исходный актив не поддерживается',
  'swap.errors.asset.missingTargetAsset': 'Целевой актив не поддерживается',
  'swap.min.amount.info':
    'Минимальное значение для обмена, чтобы покрыть все комиссии за входящие и исходящие транзакции.',
  'swap.min.result.info':
    'Ваш обмен защищен этим минимальным значением, основанным на выбранном {tolerance}% допуске на проскальзывание. В случае неблагоприятного изменения цены более чем на {tolerance}% ваша сделка будет отменена до подтверждения.',
  'swap.min.result.protected': 'Результат защищённого обмена'
}

export default swap
