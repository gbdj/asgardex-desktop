import { DepositMessages } from '../types'

const deposit: DepositMessages = {
  'deposit.interact.actions.bond': 'Вложить',
  'deposit.interact.actions.unbond': 'Изъять',
  'deposit.interact.actions.leave': 'Выйти',
  'deposit.interact.actions.buyThorname': 'Купить Thorname',
  'deposit.interact.actions.checkThorname': 'Проверить доступность',
  'deposit.interact.actions.addBondProvider': 'Добавить поставщика обеспечения',
  'deposit.interact.title': 'Вклад',
  'deposit.interact.subtitle': 'Взаимодействие с THORСhain',
  'deposit.interact.label.bondprovider': 'Поставщик бондов (опционально)',
  'deposit.share.title': 'Ваша общая доля в пуле',
  'deposit.share.units': 'Единицы ликвидности',
  'deposit.share.poolshare': 'Доля в пуле',
  'deposit.share.total': 'Общее значение',
  'deposit.redemption.title': 'Текущая стоимость покупки',
  'deposit.totalEarnings': 'Ваш общий доход от пула',
  'deposit.add.sym': 'Добавить',
  'deposit.add.asym': 'Добавить {asset}',
  'deposit.add.runeSide': 'Сторона RUNE',
  'deposit.add.assetSide': 'Сторона актива',
  'deposit.add.min.info': 'Минимальная сумма депозита для покрытия всех комиссий за входящие и исходящие транзакции.',
  'deposit.add.max.infoWithFee':
    'Максимальная сумма для внесения основывается на балансе ({balance}) за вычетом предполагаемых комиссий ({fee}) по отношению к активу другой стороны.',
  'deposit.add.max.info':
    'Максимальный размер депозита зависит от баланса ({balance}) по отношению к активу другой стороны.',
  'deposit.add.state.sending': 'Отправка транзакции для вклада',
  'deposit.add.state.checkResults': 'Проверка статуса вклада',
  'deposit.add.state.pending': 'Добавление вклада',
  'deposit.add.state.success': 'Вклад успешно совершен',
  'deposit.add.state.error': 'Ошибка вложения средств',
  'deposit.add.error.chainFeeNotCovered': 'Необходимая комиссия {fee} не покрывается вашим балансом: {balance}',
  'deposit.add.error.nobalances': 'Нет средств',
  'deposit.add.error.nobalance1': 'У вас нет средств на балансе {asset} в кошелке для вклада',
  'deposit.add.error.nobalance2': 'У вас нет средств на балансах {asset1} и {asset2} в кошельке для вклада',
  'deposit.add.pendingAssets.title': 'Обнаружены ожидающие активы',
  'deposit.add.pendingAssets.description':
    'Эти активы были успешно отправлены, но транзакция для другого актива не была завершена или возникла ошибка, при ее отправке:',
  'deposit.add.pendingAssets.recoveryDescription':
    'Обратите внимание: Транзакции для разных пар активов могут занимать разное время, так как запущены на разных блок-чейнах. В случае ошибки, у вас есть возможность изъять ожидающие активы с помощью утилиты возврата THORSwap по адресу {url}. Эта функция пока недоступна в ПК версии ASGARDEX.',
  'deposit.add.pendingAssets.recoveryTitle': 'Открыть утилиту для возврата',
  'deposit.add.asymAssets.title': 'Найден асимметричный вклад',
  'deposit.add.asymAssets.description':
    'Добавление симметричной пары активов отключено из-за предыдущего не симметричного депозита следующего(их) актива(ов):',
  'deposit.add.asymAssets.recoveryDescription':
    'Асимметричное добавление не поддерживается в текущей версии ASGARDEX. Однако вы можете использовать эту функцию в THORSwap, чтобы снять предыдущий асимметричный депозит.',
  'deposit.add.asymAssets.recoveryTitle': 'THORSwap',
  'deposit.add.assetMissmatch.title': 'Обнаружено несоответствие активов',
  'deposit.add.assetMissmatch.description':
    'Один из текущих выбранных активов уже использовался в предыдущем вкладе с другим активом. Проверьте следующие адреса, чтобы увидеть предыдущую внесённую пару.',
  'deposit.bond.state.error': 'Ошибка при вложении средств',
  'deposit.unbond.state.error': 'Ошибка при выводе',
  'deposit.leave.state.error': 'Ошибка при выходе',
  'deposit.advancedMode': 'Расширенный режим',
  'deposit.poolDetails.depth': 'Глубина',
  'deposit.poolDetails.24hvol': 'Количество за 24ч',
  'deposit.poolDetails.allTimeVal': 'Количество за все время',
  'deposit.poolDetails.totalSwaps': 'Всего обменов',
  'deposit.poolDetails.totalUsers': 'Всего пользователей',
  'deposit.poolDetails.volumeTotal': 'Количество (всего)',
  'deposit.poolDetails.earnings': 'Прибыль',
  'deposit.poolDetails.ilpPaid': 'Страховки выплачено',
  'deposit.poolDetails.totalTx': 'Транзакций',
  'deposit.poolDetails.totalFees': 'Комиссии (всего)',
  'deposit.poolDetails.members': 'Участники',
  'deposit.poolDetails.apy': 'APY',
  'deposit.wallet.add': 'Добавить',
  'deposit.wallet.connect': 'Пожалуйста добавьте свой кошелек',
  'deposit.pool.noShares': 'У вас нет доли в этом пуле',
  'deposit.withdraw.sym': 'Вывести',
  'deposit.withdraw.asym': 'Вывести {asset}',
  'deposit.withdraw.sym.title': 'Корректировка вывода (симметрично)',
  'deposit.withdraw.asym.title': 'Корректировка вывода (асимметрично)',
  'deposit.withdraw.pending': 'Вывести',
  'deposit.withdraw.success': 'Успешно выведено',
  'deposit.withdraw.error': 'Ошибка при выводе',
  'deposit.withdraw.choseText': 'Выберите сколько вы хотите изъять от 0% до 100%',
  'deposit.withdraw.fees': 'Комиссия транзакции: {thorMemo}, Исходящие комиссии: {thorOut} + {assetOut}',
  'deposit.withdraw.feeNote': 'Важно: {fee} BNB останется на вашем кошельке для покрытия комиссий.',
  'deposit.withdraw.error.feeNotCovered':
    'Комиссия транзакции {fee} должна покрываться вашим балансом (баланс: {balance})',
  'deposit.ledger.sign': 'Нажмите далее, чтобы подписать транзакцию вложения средств на вашем устройстве.'
}

export default deposit
