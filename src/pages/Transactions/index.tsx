import { TransactionsContainer, TransactionsTable, PriceHighlight } from './styles'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'

export function Transactions() {
    return (
        <div>
            <Header />

            <Summary />

            <TransactionsContainer>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width='50%'>Desenvolvimento de site</td>
                            <td>
                                <PriceHighlight variant='income'>
                                    R$ 12.000,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>15/08/2022</td>
                        </tr>
                        <tr>
                            <td width='50%'>Pizza</td>
                            <td>
                                <PriceHighlight variant='outcome'>
                                    - R$ 500,00
                                </PriceHighlight>
                            </td>
                            <td>Alimentação</td>
                            <td>15/08/2022</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}